import { html } from 'lit';
import { property } from 'lit/decorators.js';

// classes
import { FormElement } from '@interzero/form-element';

// style import
import { style } from './style.css';

// types & interfaces
export enum Types {
  button = 'button',
  reset = 'reset',
  submit = 'submit',
}
export enum Variants {
  text = 'text',
  default = 'default',
  icon = 'icon',
}

export class Button extends FormElement {
  static styles = style;

  @property() type?: Types;

  @property() variant: Variants = Variants.default;

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
      <button ?disabled=${this.disabled} class=${this.variant || ''}>
        <slot></slot>
      </button>
    `;
  }
}
