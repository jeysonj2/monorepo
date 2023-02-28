import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import { DropdownButton } from '../src/DropdownButtonExports.js';
import '../src/dropdown-button.js';

describe('DropdownButton', () => {
  it('should be able to toggle open/close', async () => {
    const el = await fixture<DropdownButton>(
      html`<iz-dropdown-button></iz-dropdown-button>`
    );

    expect(el.open).to.be.false;
    el!.click();
    expect(el.open).to.be.true;
  });

  it('should be able to pick default state', async () => {
    const el = await fixture<DropdownButton>(
      html`<iz-dropdown-button ?open=${true}></iz-dropdown-button>`
    );
    expect(el.open).to.be.true;
  });

  it('should dispatch open/close event', async () => {
    const cb = sinon.spy();

    const el = await fixture<DropdownButton>(html`<iz-dropdown-button
      @dropdown-state=${(event: CustomEvent<{ open: boolean }>) =>
        cb(event.detail.open)}
      >Hello</iz-dropdown-button
    >`);

    el!.click();
    expect(cb).to.have.been.calledWith(true);
    el!.click();
    expect(cb).to.have.been.calledWith(false);

    expect(cb).to.have.been.callCount(2);
  });

  it('should be able to control open state from outside', async () => {
    const cb = sinon.spy();

    const el = await fixture<DropdownButton>(html`<iz-dropdown-button
      @dropdown-state=${(event: CustomEvent<{ open: boolean }>) =>
        cb(event.detail.open)}
      >Hello</iz-dropdown-button
    >`);

    el.setAttribute('open', 'true');
    expect(cb).to.have.been.calledWith(true);
    el.setAttribute('open', 'false');
    expect(cb).to.have.been.calledWith(false);

    expect(cb).to.have.been.callCount(2);
  });

  it.skip('passes the a11y audit', async () => {
    const el = await fixture<DropdownButton>(
      html`<iz-dropdown-button></iz-dropdown-button>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
