import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { FieldPassword } from '../src/FieldPasswordExports.js';
import '../src/field-password.js';

describe('FieldPassword', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<FieldPassword>(
      html`<iz-global-field-password></iz-global-field-password>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
