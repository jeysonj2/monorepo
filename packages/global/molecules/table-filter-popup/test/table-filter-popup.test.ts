import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { TableFilterPopup } from '../src/TableFilterPopupExports.js';
import '../src/table-filter-popup.js';

describe('TableFilterPopup', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<TableFilterPopup>(
      html`<iz-global-table-filter-popup></iz-global-table-filter-popup>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
