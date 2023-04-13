import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { TableHeader } from '../src/TableHeaderExports.js';
import '../src/table-header.js';

describe('TableHeader', () => {

  it('passes the a11y audit', async () => {
    const el = await fixture<TableHeader>(html`<iz-global-table-header></iz-global-table-header>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
