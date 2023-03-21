import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { MenuButton } from '../src/MenuButtonExports.js';
import '../src/menu-button.js';

describe('MenuButton', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<MenuButton>(
      html`<iz-menu-button></iz-menu-button>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
