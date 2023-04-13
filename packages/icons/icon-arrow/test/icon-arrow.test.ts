import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { IconArrow } from '../src/IconArrowExports.js';
import '../src/icon-arrow.js';

describe('IconArrow', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<IconArrow>(html`<iz-icon-arrow></iz-icon-arrow>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
