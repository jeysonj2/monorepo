import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { FlowContent } from '../src/FlowContentExports.js';
import '../src/flow-content.js';

describe('FlowContent', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<FlowContent>(
      html`<iz-pmp-flow-content></iz-pmp-flow-content>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
