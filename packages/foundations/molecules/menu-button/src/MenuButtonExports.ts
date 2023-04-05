import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web components
import '@interzero/button/wc';
import '@interzero-icons/icon-caret/wc';

// types
import type { Variant } from '@interzero/button';

// local imports
import { style } from './style.css.js';

// types & interfaces
export type Direction = 'up' | 'down';

export class MenuButton extends LitElement {
  static styles = style;

  @property() variant: Variant = 'default';

  @property() direction: Direction = 'down';

  @property({
    type: Boolean,
    converter: value =>
      !!['true', true, ''].includes((value || '').toLowerCase()),
  })
  open?: boolean = false;

  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
  }

  private handleClick() {
    this.open = !this.open;
    this.dispatchEvent(
      new CustomEvent('menu-state', { detail: { open: this.open } })
    );
  }

  render() {
    const directionValue = this.direction === 'up' ? -180 : 0;

    return html`
      <iz-button class=${this.variant} variant=${this.variant} size=${this.variant === "text" ? "small" : "large"}>
        <div>
          <slot></slot>
          <span class="icon">
            <iz-icon-caret
              rotate=${this.open ? directionValue : 90}
            ></iz-icon-caret>
          </span>
        </div>
      </iz-button>
    `;
  }
}
