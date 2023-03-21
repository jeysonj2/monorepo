import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Loginpage } from '../src/LoginpageExports.js';
import '../src/loginpage.js';

describe('Loginpage', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<Loginpage>(
      html`<iz-global-loginpage></iz-global-loginpage>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
