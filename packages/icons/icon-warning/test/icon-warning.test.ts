import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { IconWarning } from '../src/IconWarningExports.js';
import '../src/icon-warning.js';

describe('IconWarning', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<IconWarning>(
      html`<iz-icon-warning></iz-icon-warning>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
