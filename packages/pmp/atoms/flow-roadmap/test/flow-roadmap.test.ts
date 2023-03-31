import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { FlowRoadmap } from '../src/FlowRoadmapExports.js';
import '../src/flow-roadmap.js';

describe('FlowRoadmap', () => {

  it('passes the a11y audit', async () => {
    const el = await fixture<FlowRoadmap>(html`<iz-pmp-flow-roadmap></iz-pmp-flow-roadmap>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
