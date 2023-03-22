import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { FlowButton } from '../src/FlowButtonExports.js';
import '../src/flow-button.js';

describe('FlowButton', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<FlowButton>(
      html`<iz-pmp-flow-button></iz-pmp-flow-button>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
