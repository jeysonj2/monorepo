import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { IconError } from '../src/IconErrorExports.js';
import '../src/icon-error.js';

describe('IconError', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<IconError>(html`<iz-icon-error></iz-icon-error>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
