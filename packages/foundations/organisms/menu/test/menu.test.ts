import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Menu } from '../src/MenuExports.js';
import '../src/menu.js';

describe('Menu', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<Menu>(html`<iz-menu></iz-menu>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
