import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { LoginForm } from '../src/LoginFormExports.js';
import '../src/login-form.js';

describe('LoginForm', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<LoginForm>(
      html`<iz-global-login-form></iz-global-login-form>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
