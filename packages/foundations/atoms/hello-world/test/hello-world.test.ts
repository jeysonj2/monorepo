import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { HelloWorld } from '../src/HelloWorldExports.js';
import '../src/hello-world.js';

describe('HelloWorld', () => {
  it('has a default header "Hey there" and counter 1', async () => {
    const el = await fixture<HelloWorld>(
      html`<iz-hello-world></iz-hello-world>`
    );

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(1);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<HelloWorld>(
      html`<iz-hello-world></iz-hello-world>`
    );
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(2);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<HelloWorld>(
      html`<iz-hello-world header="attribute header"></iz-hello-world>`
    );

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<HelloWorld>(
      html`<iz-hello-world></iz-hello-world>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
