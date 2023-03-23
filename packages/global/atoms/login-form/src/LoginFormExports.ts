import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
// atoms
import '@interzero/button/wc';
import '@interzero/input/wc';
import '@interzero/link/wc';
// molecules
import '@interzero/field/wc';
// icons
import '@interzero-icons/icon-lock/wc';
import '@interzero-icons/icon-mail/wc';

// classes
import '@interzero-tools/translate';

// style import
import { style } from './style.css.js';

// types & interfaces
type BaseVariants = 'login' | 'register';
export type Variant = BaseVariants | 'update' | 'reset';
export type SubmitEvent = { data: FormData; variant: Variant };

export class LoginForm extends LitElement {
  static styles = style;

  @property() variant: Variant = 'login';

  @property() passwordMinlength: number = 5;

  private handleSubmit = (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const data = new FormData(form);
    this.dispatchEvent(
      new CustomEvent<SubmitEvent>('submit', {
        detail: { data, variant: this.variant },
      })
    );
  };

  private handleLeftClick = () => {
    if (this.variant === 'login') {
      this.variant = 'register';
    } else if (this.variant === 'register') {
      this.variant = 'login';
    }
  };

  private handleLinkClick = (event: Event) => {
    event.preventDefault();
    if (this.variant === 'login') {
      this.variant = 'reset';
    } else if (this.variant === 'reset') {
      this.variant = 'login';
    }
  };

  // Fields
  static getEmail() {
    return html`
      <iz-field label="Email">
        <iz-input
          name="email"
          placeholder="example@interzero.de"
          type="email"
          required
          validateAtStart
          .errors=${{
            typeMismatch: 'Must be a valid E-Mail',
            valueMissing: 'You have to provide a E-Mail',
          }}
        ></iz-input>
        <iz-icon-mail slot="left"></iz-icon-mail>
      </iz-field>
    `;
  }

  private getPassword() {
    return html`
      <iz-field label="Password">
        <iz-input
          name="password"
          placeholder="type password"
          required
          minlength=${this.passwordMinlength}
          type="password"
          .errors=${{
            valueMissing: 'You must provide a password',
            tooShort: 'Password is too short minimum 5 charactures',
          }}
        ></iz-input>
        <iz-icon-lock slot="left"></iz-icon-lock>
      </iz-field>
    `;
  }

  static getRePassword() {
    return html`
      <iz-field label="Re-enter Password">
        <iz-input
          name="repassword"
          placeholder="type password"
          type="password"
          required
          matchOther="input[name='password']"
          .errors=${{
            matchOther: 'Passwords must match',
          }}
        ></iz-input>
        <iz-icon-lock slot="left"></iz-icon-lock>
      </iz-field>
    `;
  }

  // Whole Fields
  private getLoginFields() {
    return html`
      ${LoginForm.getEmail()} ${this.getPassword()}
      <div>
        <iz-button @click=${this.handleLeftClick}>
          <iz-translate>REGISTER</iz-translate>
        </iz-button>
        <iz-button type="submit">
          <iz-translate>LOGIN</iz-translate>
        </iz-button>
        <iz-link href="#forgot-password" @click=${this.handleLinkClick}>
          <iz-translate>Forgot Password?</iz-translate>
        </iz-link>
      </div>
    `;
  }

  private getRegisterFields() {
    return html`
      ${LoginForm.getEmail()} ${this.getPassword()} ${LoginForm.getRePassword()}
      <div>
        <iz-button @click=${this.handleLeftClick}>
          <iz-translate>LOGIN</iz-translate>
        </iz-button>
        <iz-button type="submit">
          <iz-translate>REGISTER</iz-translate>
        </iz-button>
      </div>
    `;
  }

  private getUpdateFields() {
    return html`
      ${this.getPassword()} ${LoginForm.getRePassword()}
      <div>
        <iz-button type="submit">
          <iz-translate>UPDATE</iz-translate>
        </iz-button>
      </div>
    `;
  }

  private getResetFields() {
    return html`
      ${this.getPassword()} ${LoginForm.getRePassword()}
      <div>
        <iz-button type="submit">
          <iz-translate>RESET</iz-translate>
        </iz-button>
        <iz-link href="#remembered-password" @click=${this.handleLinkClick}>
          <iz-translate>Remembered it?</iz-translate>
        </iz-link>
      </div>
    `;
  }

  render() {
    return html`
      <form @submit=${this.handleSubmit}>
        ${this.variant === 'login' ? this.getLoginFields() : null}
        ${this.variant === 'register' ? this.getRegisterFields() : null}
        ${this.variant === 'reset' ? this.getResetFields() : null}
        ${this.variant === 'update' ? this.getUpdateFields() : null}
      </form>
    `;
  }
}
