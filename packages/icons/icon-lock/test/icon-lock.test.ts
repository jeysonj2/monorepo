import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { IconLock } from '../src/IconLockExports.js';
import '../src/icon-lock.js';

describe('IconLock', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<IconLock>(html`<iz-icon-lock></iz-icon-lock>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
