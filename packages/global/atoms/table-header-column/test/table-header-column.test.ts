import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { TableHeaderColumn } from '../src/TableHeaderColumnExports.js';
import '../src/table-header-column.js';

describe('TableHeaderColumn', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<TableHeaderColumn>(html`<iz-global-table-header-column></iz-global-table-header-column>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
