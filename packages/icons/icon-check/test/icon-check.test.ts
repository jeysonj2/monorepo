import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { IconCheck } from '../src/IconCheckExports.js';
import '../src/icon-check.js';

describe('IconCheck', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<IconCheck>(html`<iz-icon-check></iz-icon-check>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
