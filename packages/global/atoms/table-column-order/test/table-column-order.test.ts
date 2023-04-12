import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { TableColumnOrder } from '../src/TableColumnOrderExports.js';
import '../src/table-column-order.js';

describe('TableColumnOrder', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<TableColumnOrder>(
      html`<iz-global-table-column-order></iz-global-table-column-order>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
