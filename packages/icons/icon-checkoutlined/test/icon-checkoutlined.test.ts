import { html } from 'lit';
import { fixture, expect, nextFrame } from '@open-wc/testing';
import { IconCheckoutlined } from '../src/IconCheckoutlinedExports.js';
import '../src/icon-checkoutlined.js';

describe('IconCheckoutlined', () => {
  it('should be possible to toggle checked', async () => {
    const el = await fixture<IconCheckoutlined>(
      html`<iz-icon-checkoutlined checked="false"></iz-icon-checkoutlined>`
    );

    expect(el.shadowRoot?.querySelector('path')).to.be.null;
    el.checked = true;
    await nextFrame();
    expect(el.shadowRoot?.querySelector('path')).to.not.be.null;
    el.setAttribute('checked', 'false');
    await nextFrame();
    expect(el.shadowRoot?.querySelector('path')).to.be.null;
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<IconCheckoutlined>(
      html`<iz-icon-checkoutlined></iz-icon-checkoutlined>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
