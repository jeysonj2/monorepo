import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Popup } from '../src/PopupExports.js';
import '../src/popup.js';

describe('Popup', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<Popup>(html`<iz-popup></iz-popup>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
