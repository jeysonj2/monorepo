import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Footer } from '../src/FooterExports.js';
import '../src/footer.js';

describe('Footer', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<Footer>(
      html`<iz-global-footer></iz-global-footer>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
