import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { RegisterFields } from '../src/RegisterFieldsExports.js';
import '../src/iz-global-register-fields.js';

describe('RegisterFields', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<RegisterFields>(
      html`<iz-global-register-fields></iz-global-register-fields>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
