import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { FieldEmail } from '../src/FieldEmailExports.js';
import '../src/field-email.js';

describe('FieldEmail', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<FieldEmail>(
      html`<iz-global-field-email></iz-global-field-email>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
