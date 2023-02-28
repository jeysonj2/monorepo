import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import { Option } from '../src/OptionExports.js';
import '../src/option.js';

describe('Option', () => {
  it('should be checkable', async () => {
    const el = await fixture<Option>(html`<iz-option></iz-option>`);

    el.click();
    expect(el.checked).to.be.true;
    el.click();
    expect(el.checked).to.be.false;
  });

  it('should dispatch change event', async () => {
    const spy = sinon.spy();
    const el = await fixture<Option>(
      html`<iz-option
        value="something"
        @change=${(event: CustomEvent) => spy(event.detail)}
      ></iz-option>`
    );

    el.click();
    expect(spy).to.have.been.callCount(1);
    expect(spy).to.have.been.calledWith({ checked: true, value: 'something' });
  });

  it('should be controllable from outside', async () => {
    const spy = sinon.spy();
    const el = await fixture<Option>(
      html`<iz-option
        value="something"
        @change=${(event: CustomEvent) => spy(event.detail)}
      ></iz-option>`
    );
    el.setAttribute('checked', 'true');
    expect(spy).to.have.been.callCount(1);
    expect(spy).to.have.been.calledWith({ checked: true, value: 'something' });
  });

  it.skip('passes the a11y audit', async () => {
    const el = await fixture<Option>(html`<iz-option></iz-option>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
