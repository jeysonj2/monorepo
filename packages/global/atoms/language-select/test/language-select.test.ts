import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { LanguageSelect } from '../src/LanguageSelectExports.js';
import '../src/language-select.js';

describe('LanguageSelect', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<LanguageSelect>(
      html`<iz-global-language-select></iz-global-language-select>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
