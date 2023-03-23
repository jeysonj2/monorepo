import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import '@interzero/field/wc';
import '@interzero/input/wc';
import '@interzero-icons/icon-lock/wc';

// style import
import { style } from './style.css.js';

export class FieldPassword extends LitElement {
  static styles = style;

  @property() label: string = 'Password';

  render() {
    return html`
      <iz-field label=${this.label}>
        <iz-input placeholder="type password" type="password"></iz-input>
        <iz-icon-lock slot="left"></iz-icon-lock>
      </iz-field>
    `;
  }
}
