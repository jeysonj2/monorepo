import { html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

// web components
import '@interzero-pmp/flow-button/wc';
import '@interzero/button/wc';
import '@interzero/typography/wc';

import type { ChangeEvent } from '@interzero-pmp/flow-button';

// locale
import { style } from './style.css.js';

// types and interfaces
export type ContinueEvent = { selected: string };

export class FlowQuestion extends LitElement {
  static styles = style;

  @property() question!: string;

  @property({ type: Boolean }) createMode: boolean = false;

  @property() description: string = 'Please select a option';

  @property() options: string[] = [];

  @state() selected: string | null = null;

  private handleChange(_event: Event) {
    const event = _event as CustomEvent<ChangeEvent>;
    if (this.selected !== event.detail.value) {
      this.selected = event.detail.value;
    } else this.selected = null;
  }

  private handleContinue = () => {
    if (this.selected) {
      this.dispatchEvent(
        new CustomEvent<ContinueEvent>('continue', {
          detail: { selected: this.selected },
        })
      );
    }
  };

  render() {
    return html`
      <div class="wrapper">
        <div>
          <iz-typography variant="logo">${this.question}</iz-typography>
          <iz-typography>${this.description}</iz-typography>
        </div>

        <div
          class="grid"
          style="grid-template-columns: repeat(${Math.min(
            this.options.length,
            5
          )}, 160px);"
        >
          ${this.options.map(
            option => html`
              <iz-pmp-flow-button
                @change=${this.handleChange}
                .checked=${this.selected === option}
                value=${option}
                >${option}</iz-pmp-flow-button
              >
            `
          )}
          ${this.createMode
            ? html`
                <iz-pmp-flow-button @change=${this.handleChange}
                  >Add +</iz-pmp-flow-button
                >
              `
            : null}
        </div>

        <div>
          <iz-button @click=${this.handleContinue} ?disabled=${!this.selected}
            >Continue</iz-button
          >
        </div>
      </div>
    `;
  }
}
