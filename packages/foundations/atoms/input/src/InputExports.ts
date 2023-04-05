import { html } from 'lit';
import { property } from 'lit/decorators.js';

import { InputTemplate } from '@interzero/input-template';

// style import
import { style } from './style.css.js';

// types & interfaces
export type Types = 'text' | 'number' | 'password' | 'email' | 'url' | 'tel';

export type Size = 'small' | 'medium' | 'large';
interface IEvent<E = HTMLInputElement> extends Event {
  target: EventTarget & E;
}

export class Input extends InputTemplate {
  static styles = style;

  @property() placeholder?: string;

  @property() type: Types = 'text';

  @property() size: Size = 'small';

  @property({
    type: Boolean,
    converter: value =>
      !!['true', true, ''].includes((value || '').toLowerCase()),
  })
  textarea: boolean = false;

  connectedCallback(): void {
    super.connectedCallback();
    if (!this.hasAttribute('size')) this.setAttribute('size', this.size);
  }

  // event handlers
  private handlechange(event: IEvent<HTMLInputElement>) {
    this.updateHidden(event.target.value, event);
  }

  render() {
    if (this.textarea) {
      return html`
        <textarea
          ?disabled=${this.disabled}
          ?required=${this.required}
          placeholder=${this.placeholder || ''}
          maxlength=${this.maxlength || Number.MAX_SAFE_INTEGER}
          minlength=${this.minlength || Number.MIN_SAFE_INTEGER}
          value=${this.value || this.defaultValue || ''}
          @input=${this.handlechange}
        ></textarea>
      `;
    }
    return html`
      <input
        ?disabled=${this.disabled}
        ?required=${this.required}
        type=${this.type}
        min=${this.min || Number.MIN_SAFE_INTEGER}
        max=${this.max || Number.MAX_SAFE_INTEGER}
        maxlength=${this.maxlength || Number.MAX_SAFE_INTEGER}
        minlength=${this.minlength || Number.MIN_SAFE_INTEGER}
        placeholder=${this.placeholder || ''}
        .value=${this.value || this.defaultValue || ''}
        @input=${this.handlechange}
      />
    `;
  }
}
