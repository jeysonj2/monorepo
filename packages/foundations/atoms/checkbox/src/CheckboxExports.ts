import { html } from 'lit';
import { property } from 'lit/decorators.js';

// classes
import { InputTemplate } from '@interzero/input-template';

import '@interzero-tools/translate/wc';
import '@interzero-icons/icon-check/wc';
import '@interzero-icons/icon-checkoutlined/wc';

// style import
import { style } from './style.css.js';

// types & interfaces
export type Variant = 'plain' | 'default';
export type ChangeEvent = {
  checked: boolean;
};

function BooleanConverter(value: string | null) {
  return !!['true', true, ''].includes((value || '').toLowerCase());
}
export class Checkbox extends InputTemplate {
  static styles = style;

  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
  }

  @property() label?: string;

  @property() variant: Variant = 'default';

  @property({
    type: Boolean,
    converter: BooleanConverter,
  })
  checked: boolean = false;

  @property({
    type: Boolean,
    converter: BooleanConverter,
  })
  locked: boolean = false;

  private handleClick(event: Event) {
    event.stopPropagation();
    if (this.disabled || this.locked) {
      return;
    }

    this.checked = !this.checked;
    this.updateHidden(`${this.checked}`);
    this.dispatchEvent(
      new CustomEvent<ChangeEvent>('change', {
        detail: { checked: this.checked },
      })
    );
  }

  render() {
    const checkedHtml = this.checked
      ? html`<iz-icon-check></iz-icon-check>`
      : '';

    return html`
      <button
        id="checkbox"
        ?disabled=${this.disabled}
        aria-checked=${this.checked}
        class=${[this.checked ? 'checked' : '', this.variant].join(' ')}
        aria-labelledby="label"
      >
        <div class="icon-wrapper">
          ${this.variant === 'plain'
            ? checkedHtml
            : html`<iz-icon-checkoutlined
                checked=${this.checked}
              ></iz-icon-checkoutlined>`}
        </div>
        ${this.label ? html`<iz-translate>${this.label}</iz-translate>` : ''}
      </button>
    `;
  }
}
