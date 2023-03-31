import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { FlowEnd } from '../src/FlowEndExports.js';
import '../src/flow-end.js';

describe('FlowEnd', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<FlowEnd>(html`<iz-pmp-flow-end></iz-pmp-flow-end>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
