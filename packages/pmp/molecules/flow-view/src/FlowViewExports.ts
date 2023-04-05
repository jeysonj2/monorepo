import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
import "@interzero-pmp/flow-option/wc";
import "@interzero-pmp/flow-question/wc";

// types
import type { ChangeEvent as QuestionChangeEvent } from '@interzero-pmp/flow-question';
import type { Variant as OptionVariant, ClickEvent as OptionClickEvent } from '@interzero-pmp/flow-option';

// style import
import { style } from './style.css.js';

// types & interfaces
export type Variant = 'default' | 'edit';
export type Option = {id:string, value:string, checked: boolean};
export interface Data {
  id: string;
  question: string;
  description: string;
  options: Option[];
}

// events
export type OptionEvent = { optionId: string, id: string, variant: OptionVariant };
export type ChangeEvent = { id: string; } & QuestionChangeEvent;

export class FlowView extends LitElement {
  static styles = style;

  @property() variant:Variant = 'default';

  @property({ type: Object }) data!:Data;

  // events
  private handleQuestionChange(event:CustomEvent<QuestionChangeEvent>) {
    this.dispatchEvent(new CustomEvent<ChangeEvent>("question-change", { detail: { ...event.detail, id: this.data.id }}));
  }
  private handleOptionClick(variant:OptionVariant) {
    return (event:CustomEvent<OptionClickEvent>) => {
      this.dispatchEvent(new CustomEvent<OptionEvent>("option-click", { detail: { id: this.data?.id, optionId: event.detail?.id, variant } }))
    }
  }

  render() {
    return html`
      <iz-pmp-flow-question
        @change=${this.handleQuestionChange}
        ?editMode=${this.variant === "edit"}
        .question=${this.data?.question||'Empty Question'}
        .description=${this.data?.description||'Empty Description'}
      ></iz-pmp-flow-question>

      <div class="grid">
        ${this.data?.options.map(option => html`
          <iz-pmp-flow-option
            @toggle=${this.handleOptionClick('default')}
            @edit=${this.handleOptionClick('edit')}
            .checked=${option.checked}
            .value=${option.value}
            id=${option.id}
            variant=${this.variant}
          ></iz-pmp-flow-option>
        `)}
        ${this.variant === "edit" && this.data?.options.length === 0 ? html`
          <iz-pmp-flow-option 
            variant="save"
            @save=${this.handleOptionClick('save')}
          ></iz-pmp-flow-option>
        ` : null}
        ${this.variant === "edit" ? html`
          <iz-pmp-flow-option 
            variant="add"
            @add=${this.handleOptionClick('add')}
          ></iz-pmp-flow-option>
        ` : null}
      </div>
    `;
  }
}
