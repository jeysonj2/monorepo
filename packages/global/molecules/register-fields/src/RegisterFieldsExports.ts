import { html, LitElement } from 'lit';

// web-components
import '@interzero/button/wc';
import '@interzero/link/wc';
import '@interzero-tools/translate/wc';

// atoms
import '@interzero-global/field-email/wc';
import '@interzero-global/field-password/wc';

// style import
import { style } from './style.css';

export class RegisterFields extends LitElement {
  static styles = style;

  handleLoginClick() {
    this.dispatchEvent(new Event('login'));
  }

  render() {
    return html`
      <iz-global-field-email></iz-global-field-email>
      <iz-global-field-password></iz-global-field-password>
      <iz-global-field-password
        label="Re-enter Password"
      ></iz-global-field-password>
      <div>
        <iz-button type="submit">
          <iz-translate>REGISTER</iz-translate>
        </iz-button>
        <iz-button @click=${this.handleLoginClick}>
          <iz-translate>LOGIN</iz-translate>
        </iz-button>
      </div>
    `;
  }
}

export interface EventMap {
  login: Event;
}
