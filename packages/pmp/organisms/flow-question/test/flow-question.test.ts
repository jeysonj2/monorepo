import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { FlowQuestion } from '../src/FlowQuestionExports.js';
import '../src/flow-question.js';

describe('FlowQuestion', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<FlowQuestion>(
      html`<iz-pmp-flow-question></iz-pmp-flow-question>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
