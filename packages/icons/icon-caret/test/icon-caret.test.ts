import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { IconCaret } from '../src/IconCaretExports.js';
import '../src/icon-caret.js';

describe('IconCaret', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<IconCaret>(html`<iz-icon-caret></iz-icon-caret>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
