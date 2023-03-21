import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { IconHome } from '../src/IconHomeExports.js';
import '../src/icon-home.js';

describe('IconHome', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<IconHome>(html`<iz-icon-home></iz-icon-home>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
