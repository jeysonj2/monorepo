import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import { Button } from '../src/ButtonExports.js';
import '../src/button.js';

describe('ButtonExports', () => {
  it('should be clickable', async () => {
    const cb = sinon.spy();

    const el = await fixture<Button>(
      html`<iz-button @click=${() => cb()}>Hello</iz-button>`
    );
    el!.click();

    expect(cb).to.have.been.callCount(1);
  });

  it('should be disabled', async () => {
    const cb = sinon.spy();

    const el = await fixture<Button>(
      html`<iz-button ?disabled=${true} @click=${() => cb()}>Hello</iz-button>`
    );
    el!.click();

    expect(cb).to.have.been.callCount(0);
  });

  it('submit form', async () => {
    const cb = sinon.spy();
    const el = await fixture<Button>(
      html`<form @submit=${() => cb()}>
        <iz-button type="submit">submit</iz-button>
      </form>`
    );

    el.querySelector<HTMLButtonElement>('iz-button')?.click();

    expect(cb).to.have.been.callCount(1);
  });

  it('register only one click if user selects shadow button', async () => {
    const cb = sinon.spy();
    const el = await fixture<Button>(
      html`<form @submit=${() => cb()}>
        <iz-button type="submit">submit</iz-button>
      </form>`
    );

    el.querySelector('iz-button')!.shadowRoot!.querySelector('button')!.click();

    expect(cb).to.have.been.callCount(1);
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<Button>(html`<iz-button>Hello</iz-button>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
