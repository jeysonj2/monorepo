import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { FlowPage } from '../src/FlowPageExports.js';
import '../src/flow-page.js';

describe('FlowPage', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<FlowPage>(html`<iz-pmp-flow-page></iz-pmp-flow-page>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
