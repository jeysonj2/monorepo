import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { IconUser } from '../src/IconUserExports.js';
import '../src/icon-user.js';

describe('IconUser', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<IconUser>(html`<iz-icon-user></iz-icon-user>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
