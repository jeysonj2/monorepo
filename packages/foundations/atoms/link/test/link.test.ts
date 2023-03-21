import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Link } from '../src/LinkExports.js';
import '../src/link.js';

describe('Link', () => {
  // it('has a default title "Hey there" and counter 5', async () => {
  //   const el = await fixture<Link>(html`<iz-link></iz-link>`);

  //   expect(el.title).to.equal('Hey there');
  //   expect(el.counter).to.equal(5);
  // });

  // it('increases the counter on button click', async () => {
  //   const el = await fixture<Link>(html`<iz-link></iz-link>`);
  //   el.shadowRoot!.querySelector('button')!.click();

  //   expect(el.counter).to.equal(6);
  // });

  // it('can override the title via attribute', async () => {
  //   const el = await fixture<Link>(html`<iz-link title="attribute title"></iz-link>`);

  //   expect(el.title).to.equal('attribute title');
  // });

  it('passes the a11y audit', async () => {
    const el = await fixture<Link>(html`<iz-link></iz-link>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
