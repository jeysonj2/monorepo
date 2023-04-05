import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-component
// atoms
import '@interzero/typography/wc';
import '@interzero/input/wc';
// molecules
import '@interzero/field/wc';
// tools
import '@interzero-tools/translate/wc';

// types
import type { ChangeEvent as HiddenChangeEvent } from '@interzero/input-template';

// style import
import { style } from './style.css';

type NameType = 'question' | 'description';
export type ChangeEvent = { name: NameType; value: string };

export class FlowQuestion extends LitElement {
  static styles = style;

  @property({ type: Boolean }) editMode: boolean = false;

  @property({ type: String }) question: string = 'Empty Question';

  @property({ type: String }) description: string = 'Empty Description';

  private handleInput(name: NameType) {
    return (event: CustomEvent<HiddenChangeEvent>) => {
      this.dispatchEvent(
        new CustomEvent<ChangeEvent>('change', {
          detail: { value: event.detail.value, name },
        })
      );
    };
  }

  render() {
    if (this.editMode) {
      return html`
        <iz-field label="Question">
          <iz-input
            @suspended-input-change=${this.handleInput('question')}
            .value=${this.question}
            placeholder="type a question"
          ></iz-input>
        </iz-field>
        <iz-field label="Description">
          <iz-input
            @suspended-input-change=${this.handleInput('description')}
            .value=${this.description}
            placeholder="type a description"
          ></iz-input>
        </iz-field>
      `;
    }

    return html`
      <iz-typography variant="logo">
        <iz-translate>${this.question}</iz-translate>
      </iz-typography>
      <iz-typography variant="heading">
        <iz-translate>${this.description}</iz-translate>
      </iz-typography>
    `;
  }
}
