import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { IconClose } from '../src/IconCloseExports.js';
import '../src/icon-close.js';

describe('IconClose', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<IconClose>(html`<iz-icon-close></iz-icon-close>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
