import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { Field } from '../src/FieldExports.js';
import '../src/field.js';

describe('Field', () => {
  // it('has a default title "Hey there" and counter 5', async () => {
  //   const el = await fixture<Field>(html`<iz-field></iz-field>`);

  //   expect(el.title).to.equal('Hey there');
  //   expect(el.counter).to.equal(5);
  // });

  // it('increases the counter on button click', async () => {
  //   const el = await fixture<Field>(html`<iz-field></iz-field>`);
  //   el.shadowRoot!.querySelector('button')!.click();

  //   expect(el.counter).to.equal(6);
  // });

  // it('can override the title via attribute', async () => {
  //   const el = await fixture<Field>(html`<iz-field title="attribute title"></iz-field>`);

  //   expect(el.title).to.equal('attribute title');
  // });

  it('passes the a11y audit', async () => {
    const el = await fixture<Field>(html`<iz-field></iz-field>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
