import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { PageTemplate } from '../src/PageTemplateExports.js';
import '../src/page-template.js';

describe('PageTemplate', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<PageTemplate>(
      html`<iz-pmp-page-template></iz-pmp-page-template>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
