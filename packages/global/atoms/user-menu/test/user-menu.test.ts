import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { UserMenu } from '../src/UserMenuExports.js';
import '../src/user-menu.js';

describe('UserMenu', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<UserMenu>(
      html`<iz-global-user-menu></iz-global-user-menu>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
