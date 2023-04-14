import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { DragIndicator } from '../src/DragIndicatorExports.js';
import '../src/drag-indicator.js';

describe('DragIndicator', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<DragIndicator>(
      html`<iz-drag-indicator></iz-drag-indicator>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
