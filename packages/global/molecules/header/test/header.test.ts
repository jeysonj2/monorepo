import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Header } from '../src/HeaderExports.js';
import '../src/header.js';

describe('Header', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<Header>(
      html`<iz-global-header></iz-global-header>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
