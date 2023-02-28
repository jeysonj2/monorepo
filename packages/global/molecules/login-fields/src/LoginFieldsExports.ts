import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
import '@interzero/button/wc';
import '@interzero/link/wc';
import '@interzero-tools/translate/wc';

// atoms
import '@interzero-global/field-email/wc';
import '@interzero-global/field-password/wc';

// style import
import { style } from './style.css.js';

export class LoginFields extends LitElement {
  static styles = style;

  @property() forgotLink: string = '/forgot-password';

  handleRegisterClick() {
    this.dispatchEvent(new Event('register'));
  }

  render() {
    return html`
      <iz-global-field-email></iz-global-field-email>
      <iz-global-field-password></iz-global-field-password>
      <div>
        <iz-button type="submit">
          <iz-translate>LOGIN</iz-translate>
        </iz-button>
        <iz-button @click=${this.handleRegisterClick}>
          <iz-translate>REGISTER</iz-translate>
        </iz-button>
      </div>
      <div>
        <iz-link .href=${this.forgotLink}>
          <iz-translate>Forgot Password?</iz-translate>
        </iz-link>
      </div>
    `;
  }
}

export interface EventMap {
  register: Event;
}
