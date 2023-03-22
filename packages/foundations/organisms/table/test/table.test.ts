import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Table } from '../src/TableExports.js';
import '../src/table.js';

describe('Table', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<Table>(html`<iz-table></iz-table>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
