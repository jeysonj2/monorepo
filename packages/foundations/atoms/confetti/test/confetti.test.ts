import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Confetti } from '../src/ConfettiExports.js';
import '../src/confetti.js';

describe('Confetti', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<Confetti>(html`<iz-confetti></iz-confetti>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
