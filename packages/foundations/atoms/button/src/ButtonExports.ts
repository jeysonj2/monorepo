import { html } from 'lit';
import { property } from 'lit/decorators.js';

// classes
import { FormElement } from '@interzero/form-element';

// style import
import { style } from './style.css.js';

// types & interfaces
export type Types = 'button' | 'reset' | 'submit';
export type Variant = 'text' | 'default' | 'circle' | 'square';
export type Size = 'small' | 'medium' | 'large';

export class Button extends FormElement {
  static styles = style;

  @property() type?: Types;

  @property() variant: Variant = 'default';

  @property() size: Size = 'large';

  private formelement?: HTMLFormElement | null;

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener('click', this.handleClick, true);

    if (!this.hasAttribute('variant')) {
      this.setAttribute('variant', this.variant);
    }

    if (!this.hasAttribute('size')) {
      this.setAttribute('size', this.size);
    }

    if (this.type === 'submit') {
      this.formelement = this.findFormElement('form', this);
      this.formelement?.addEventListener(
        'input',
        this.validateDisabledWithTypeSubmit.bind(this),
        true
      );
      this.validateDisabledWithTypeSubmit();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClick, true);

    if (this.type === 'submit' && this.formelement) {
      this.formelement.removeEventListener(
        'input',
        this.validateDisabledWithTypeSubmit,
        true
      );
    }
  }

  private isFormValid() {
    if (!this.formelement) return false;
    return this.formelement.checkValidity();
  }

  private validateDisabledWithTypeSubmit() {
    if (this.type !== 'submit') return;
    this.disabled = !this.isFormValid();

    if (this.disabled) this.setAttribute("disabled", "true");
    else this.removeAttribute("disabled");
  }

  private handleClick(event: Event) {
    this.validateDisabledWithTypeSubmit();

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
      <slot name="left"></slot>
      <slot></slot>
      <slot name="right"></slot>
    `;
  }
}
