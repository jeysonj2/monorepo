import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { ButtonSwitch } from '../src/ButtonSwitchExports.js';
import '../src/button-switch.js';

describe('ButtonSwitch', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<ButtonSwitch>(
      html`<iz-button-switch></iz-button-switch>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
