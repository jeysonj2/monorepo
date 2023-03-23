import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
import '@interzero/button/wc';
import '@interzero/checkbox/wc';

// style import
import { style } from './style.css.js';

// types & interfaces
export type ChangeEvent = { value: string };
export type Mode = 'default' | 'create';

export class FlowButton extends LitElement {
  static styles = style;

  @property() value!: string;

  @property() mode: Mode = 'default';

  @property() checked: boolean = false;

  private handleClick() {
    this.dispatchEvent(
      new CustomEvent<ChangeEvent>('change', { detail: { value: this.value } })
    );
  }

  render() {
    return html`
      <iz-button @click=${this.handleClick}>
        ${this.mode === 'default'
          ? html`<iz-checkbox checked=${this.checked}></iz-checkbox>`
          : null}
        ${this.mode === 'create' ? html`+` : null}
        <slot></slot>
      </iz-button>
    `;
  }
}
