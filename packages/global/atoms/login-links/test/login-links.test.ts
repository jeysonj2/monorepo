import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { LoginLinks } from '../src/LoginLinksExports.js';
import '../src/login-links.js';

describe('LoginLinks', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<LoginLinks>(
      html`<iz-global-login-links></iz-global-login-links>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
