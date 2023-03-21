import { html } from 'lit';
import { property } from 'lit/decorators.js';

import { InputTemplate } from '@interzero/input-template';

// style import
import { style } from './style.css';

// types & interfaces
export type Types = 'text' | 'number' | 'password' | 'email' | 'url' | 'tel';

interface IEvent<E = HTMLInputElement> extends Event {
  target: EventTarget & E;
}

export class Input extends InputTemplate {
  static styles = style;

  @property() placeholder?: string;

  @property() type: Types = 'text';

  @property({
    type: Boolean,
    converter: value =>
      !!['true', true, ''].includes((value || '').toLowerCase()),
  })
  textarea: boolean = false;

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
          maxlength=${this.maxlength}
          minlength=${this.minlength}
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
        min=${this.min}
        max=${this.max}
        maxlength=${this.maxlength}
        minlength=${this.minlength}
        placeholder=${this.placeholder || ''}
        .value=${this.value || this.defaultValue || ''}
        @input=${this.handlechange}
      />
    `;
  }
}
