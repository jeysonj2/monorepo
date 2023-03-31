import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { IconCog } from '../src/IconCogExports.js';
import '../src/icon-cog.js';

describe('IconCog', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<IconCog>(html`<iz-icon-cog></iz-icon-cog>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
