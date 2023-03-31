import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { List } from '../src/ListExports.js';
import '../src/list.js';

describe('List', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<List>(html`<iz-list></iz-list>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
