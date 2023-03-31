import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { IconList } from '../src/IconListExports.js';
import '../src/icon-list.js';

describe('IconList', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<IconList>(html`<iz-icon-list></iz-icon-list>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
