import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { TableFilter } from '../src/TableFilterExports.js';
import '../src/table-filter.js';

describe('TableFilter', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<TableFilter>(
      html`<iz-global-table-filter></iz-global-table-filter>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
