import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
import '@interzero/button/wc';
import '@interzero/input/wc';

// icons
import '@interzero-icons/icon-caret/wc';

// classes
import type { ChangeEvent as HiddenChangeEvent } from '@interzero/input-template';

// style import
import { style } from './style.css.js';

// types & interfaces
type BaseVariant = 'default' | 'text';
export type Variant = BaseVariant | 'input';
export type Direction = 'up' | 'down';

export class DropdownButton extends LitElement {
  static styles = style;

  @property({ type: Boolean }) open?: boolean = false;

  @property({ type: Boolean }) disabled?: boolean = false;

  @property() variant: Variant = 'default';

  @property() direction: Direction = 'down';

  @property() placeholder?: string;

  @property() inputvalue?: string;

  // class functions
  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
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

  // event handlers
  private handleClick() {
    this.open = !this.open;
    this.dispatchEvent(
      new CustomEvent('dropdown-state', { detail: { open: this.open } })
    );
  }

  private handleSlotChange = (event: Event) => {
    const slot = event.currentTarget as HTMLSlotElement;

    setTimeout(() => {
      const nodes = slot.assignedNodes();
      let text: string | null = null;
      if (nodes.length === 1) text = nodes[0].textContent;
      else if (nodes.length > 0) {
        const element = nodes.filter(
          node => node.nodeName !== '#text'
        )?.[0] as HTMLElement;
        text = element.innerText;
      }
      this.placeholder = text ?? '';
      console.log('placeholder', this.placeholder);
    }, 1);
  };

  private handleInput(event: CustomEvent<HiddenChangeEvent>) {
    this.dispatchEvent(
      new CustomEvent<HiddenChangeEvent>('input-change', event)
    );
  }

  render() {
    const directionValue = this.direction === 'up' ? -180 : 0;
    if (this.variant === 'input') {
      return html`
        <span class="input">
          <iz-input
            @suspended-input-change=${this.handleInput}
            placeholder=${this.placeholder ?? ''}
            .value=${this.inputvalue}
          ></iz-input>
          <slot
            style="display:none;"
            @slotchange=${this.handleSlotChange}
          ></slot>
          <span class="icon"
            ><iz-icon-caret
              rotate=${this.open ? directionValue : 90}
            ></iz-icon-caret
          ></span>
        </span>
      `;
    }

    return html`
      <iz-button
        .disabled=${this.disabled}
        .variant=${this.variant}
        .size=${this.variant === 'text' ? 'small' : 'large'}
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
