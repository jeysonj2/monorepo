import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { UserProfile } from '../src/UserProfileExports.js';
import '../src/user-profile.js';

describe('UserProfile', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<UserProfile>(
      html`<iz-pmp-user-profile></iz-pmp-user-profile>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
