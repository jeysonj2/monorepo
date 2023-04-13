import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Accordion } from '../src/AccordionExports.js';
import '../src/accordion.js';

describe('Accordion', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<Accordion>(html`<iz-accordion></iz-accordion>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
