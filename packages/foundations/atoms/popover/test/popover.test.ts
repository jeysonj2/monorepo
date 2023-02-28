import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Popover } from '../src/PopoverExports.js';
import '../src/popover.js';

describe('Popover', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<Popover>(html`<iz-popover></iz-popover>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
