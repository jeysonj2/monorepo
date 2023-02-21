import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { IzwcHelloWorld } from '../src/IzwcHelloWorld.js';
import '../src/izwc-hello-world.js';

describe('IzwcHelloWorld', () => {
  it('has a default message "Hey there" and counter 5', async () => {
    const el = await fixture<IzwcHelloWorld>(
      html`<izwc-hello-world></izwc-hello-world>`
    );

    expect(el.message).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<IzwcHelloWorld>(
      html`<izwc-hello-world></izwc-hello-world>`
    );
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the message via attribute', async () => {
    const el = await fixture<IzwcHelloWorld>(
      html`<izwc-hello-world message="attribute message"></izwc-hello-world>`
    );

    expect(el.message).to.equal('attribute message');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<IzwcHelloWorld>(
      html`<izwc-hello-world></izwc-hello-world>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
