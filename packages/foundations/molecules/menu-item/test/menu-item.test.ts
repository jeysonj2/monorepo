import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { MenuItem } from '../src/MenuItemExports.js';
import '../src/menu-item.js';

describe('MenuItem', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<MenuItem>(html`<iz-menu-item></iz-menu-item>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
