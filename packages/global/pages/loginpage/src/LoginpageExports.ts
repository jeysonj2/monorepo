import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import '@interzero-global/logo/wc';
import '@interzero-global/login-fields/wc';
import '@interzero-global/login-form/wc';
import '@interzero-global/login-links/wc';
import type { SubmitEvent, Variant } from '@interzero-global/login-form';

// style import
import { style } from './style.css.js';

export type { Variant } from '@interzero-global/login-form';

// classes
export class Loginpage extends LitElement {
  static styles = style;

  @property() variant: Variant = 'login';

  goto(variant: Variant) {
    this.variant = variant;
  }

  private handleSubmit = (event: CustomEvent<SubmitEvent>) => {
    this.dispatchEvent(
      new CustomEvent<SubmitEvent>('submit', { detail: event.detail })
    );
  };

  render() {
    return html`
      <div class="left"></div>
      <div class="right">
        <div class="box">
          <div class="centered">
            <iz-global-logo></iz-global-logo>
          </div>
          <iz-global-login-form
            variant=${this.variant}
            @submit=${this.handleSubmit}
          ></iz-global-login-form>
        </div>
        <iz-global-login-links></iz-global-login-links>
      </div>
    `;
  }
}
