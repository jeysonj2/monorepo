import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { FlowView } from '../src/FlowViewExports.js';
import '../src/flow-view.js';

describe('FlowView', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<FlowView>(html`<iz-pmp-flow-view></iz-pmp-flow-view>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
