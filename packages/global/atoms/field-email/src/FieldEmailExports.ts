import { html, LitElement } from 'lit';

import '@interzero/field/wc';
import '@interzero/input/wc';
import '@interzero-icons/icon-mail/wc';

// style import
import { style } from './style.css.js';

export class FieldEmail extends LitElement {
  static styles = style;

  render() {
    return html`
      <iz-field label="Email">
        <iz-input placeholder="example@interzero.de" type="email"></iz-input>
        <iz-icon-mail slot="left"></iz-icon-mail>
      </iz-field>
    `;
  }
}
