import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
import '@interzero/button/wc';
import '@interzero-icons/icon-caret/wc';

import { Variants } from '@interzero/button';

// style import
import { style } from './style.css';

// types & interfaces
export enum Direction {
  up = 'up',
  down = 'down',
}

// export Variants from "@interzero/button"
export { Variants } from '@interzero/button';

export class DropdownButton extends LitElement {
  static styles = style;

  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
  }

  @property({
    type: Boolean,
    converter: value =>
      !!['true', true, ''].includes((value || '').toLowerCase()),
  })
  open?: boolean = false;

  @property({
    type: Boolean,
    converter: value =>
      !!['true', true, ''].includes((value || '').toLowerCase()),
  })
  disabled?: boolean = false;

  @property() variant: Variants = Variants.default;

  @property() direction: Direction = Direction.down;

  private handleClick() {
    this.open = !this.open;
    this.dispatchEvent(
      new CustomEvent('dropdown-state', { detail: { open: this.open } })
    );
  }

  attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ): void {
    super.attributeChangedCallback(name, _old, value);

    if (name === 'open') {
      let _value = false;

      if (typeof value === 'string') _value = value === 'true';
      else if (typeof value === 'boolean') _value = value;

      this.dispatchEvent(
        new CustomEvent('dropdown-state', { detail: { open: _value } })
      );
    }
  }

  render() {
    const directionValue = this.direction === 'up' ? -180 : 0;

    return html`
      <iz-button
        .disabled=${this.disabled}
        .variant=${this.variant}
        class=${[this.variant, this.disabled ? 'disabled' : ''].join(' ')}
      >
        <div>
          <span class="center"><slot></slot></span>
          <span class="icon"
            ><iz-icon-caret
              rotate=${this.open ? directionValue : 90}
            ></iz-icon-caret
          ></span>
        </div>
      </iz-button>
    `;
  }
}
