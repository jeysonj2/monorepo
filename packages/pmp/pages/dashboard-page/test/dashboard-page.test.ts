import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { DashboardPage } from '../src/DashboardPageExports.js';
import '../src/dashboard-page.js';

describe('DashboardPage', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<DashboardPage>(
      html`<iz-pmp-dashboard-page></iz-pmp-dashboard-page>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
