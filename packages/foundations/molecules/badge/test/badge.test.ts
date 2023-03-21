import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Badge } from '../src/BadgeExports.js';
import '../src/iz-badge.js';

describe('Badge', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<Badge>(html`<iz-badge></iz-badge>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
