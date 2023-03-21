import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
import '@interzero/button/wc';

// style imports
import { style } from './style.css';

// types & interfaces
export type ChangeEvent = { value: string };

export class MenuItem extends LitElement {
  static styles = style;

  @property() value!: string;

  constructor() {
    super();

    this.addEventListener('click', this.handleClick);
  }

  private handleClick(event: Event) {
    event.stopPropagation();
    this.dispatchChange();
  }

  private dispatchChange() {
    this.dispatchEvent(
      new CustomEvent<ChangeEvent>('change', { detail: { value: this.value } })
    );
  }

  render() {
    return html`
      <iz-button variant="text">
        <div>
          <slot></slot>
        </div>
      </iz-button>
    `;
  }
}
