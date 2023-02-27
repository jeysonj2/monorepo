import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { IzwcHelloWorld } from '../src/IzwcHelloWorld.js';
import '../src/izwc-hello-world.js';

describe('IzwcHelloWorld', () => {
  it('has a default header "Hey there" and counter 1', async () => {
    const el = await fixture<IzwcHelloWorld>(
      html`<izwc-hello-world></izwc-hello-world>`
    );

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(1);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<IzwcHelloWorld>(
      html`<izwc-hello-world></izwc-hello-world>`
    );
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(2);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<IzwcHelloWorld>(
      html`<izwc-hello-world header="attribute header"></izwc-hello-world>`
    );

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<IzwcHelloWorld>(
      html`<izwc-hello-world></izwc-hello-world>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
