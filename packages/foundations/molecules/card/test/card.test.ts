import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Card } from '../src/CardExports.js';
import '../src/card.js';

describe('Card', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<Card>(html`<iz-card></iz-card>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
