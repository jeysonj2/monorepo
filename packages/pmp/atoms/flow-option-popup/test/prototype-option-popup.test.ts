import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { FlowOptionPopup } from '../src/FlowOptionPopupExports.js';
import '../src/flow-option-popup.js';

describe('FlowOptionPopup', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<FlowOptionPopup>(html`<iz-pmp-flow-option-popup></iz-pmp-flow-option-popup>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
