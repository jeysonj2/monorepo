import { html } from 'lit';
import { property } from 'lit/decorators.js';

// classes
import { FormElement } from '@interzero/form-element';

// style import
import { style } from './style.css';

// types & interfaces
export type Types = 'button' | 'reset' | 'submit';
export type Variant = 'text' | 'default' | 'circle' | 'square';
export type Size = 'small' | 'medium' | 'large';

export class Button extends FormElement {
  static styles = style;

  @property() type?: Types;

  @property() variant: Variant = 'default';

  @property() size: Size = 'large';

  @property({
    type: Boolean,
    converter: value =>
      !!['true', true, ''].includes((value || '').toLowerCase()),
  })
  disabled: boolean = false;

  private formelement?: HTMLFormElement | null;

  constructor() {
    super();

    this.addEventListener('click', this.handleClick, true);
  }

  override connectedCallback() {
    super.connectedCallback();

    if (!this.hasAttribute('variant'))
      this.setAttribute('variant', this.variant);
    if (!this.hasAttribute('size')) this.setAttribute('size', this.size);

    if (this.type === 'submit') {
      this.formelement = this.findFormElement('form', this);
    }
  }

  private handleClick(event: Event) {
    if (this.disabled) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }

    if (this.type === 'submit' && this.formelement) {
      this.formelement.dispatchEvent(new SubmitEvent('submit'));
    }
  }

  render() {
    // NOTE the text is the same as typography.body
    return html`
      <div>
        <slot name="left"></slot>
        <slot></slot>
        <slot name="right"></slot>
      </div>
    `;
  }
}
