import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { LoginFields } from '../src/LoginFieldsExports.js';
import '../src/login-fields.js';

describe('LoginFields', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<LoginFields>(
      html`<iz-global-login-fields></iz-global-login-fields>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
