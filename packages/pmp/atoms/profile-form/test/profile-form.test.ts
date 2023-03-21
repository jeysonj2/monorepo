import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { ProfileForm } from '../src/ProfileFormExports.js';
import '../src/profile-form.js';

describe('ProfileForm', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<ProfileForm>(
      html`<iz-pmp-profile-form></iz-pmp-profile-form>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
