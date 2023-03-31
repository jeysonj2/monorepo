import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { ListItem } from '../src/ListItemExports.js';
import '../src/list-item.js';

describe('List', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<ListItem>(html`<iz-list-item></iz-list-item>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
