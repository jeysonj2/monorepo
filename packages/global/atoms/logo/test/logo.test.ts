import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Logo } from '../src/LogoExports.js';
import '../src/logo.js';

describe('Logo', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<Logo>(html`<iz-global-logo></iz-global-logo>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
