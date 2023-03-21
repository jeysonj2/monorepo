import { html } from 'lit';
import { fixture, expect, nextFrame } from '@open-wc/testing';
import sinon from 'sinon';
import { Checkbox } from '../src/CheckboxExports.js';
import '../src/checkbox.js';

// TODO fix the corresponding failures - figure out how we could "simulate" a click
// doesnt seem to update the checked value
describe('Checkbox', () => {
  it('should be possible to toggle', async () => {
    const el = await fixture<Checkbox>(html`<iz-checkbox></iz-checkbox>`);
    expect(el.checked).to.be.false;
    el?.click();

    expect(el.checked).to.be.true;
  });

  it('should be possible to toggle via html', async () => {
    const el = await fixture<Checkbox>(
      html`<iz-checkbox ?checked=${true}></iz-checkbox>`
    );
    expect(el.checked).to.be.true;

    el.checked = false;
    await nextFrame();
    expect(el.checked).to.be.false;

    el.setAttribute('checked', 'true');
    await nextFrame();
    expect(el.checked).to.be.true;
  });

  it('should take checked', async () => {
    const el = await fixture<Checkbox>(
      html`<iz-checkbox ?checked=${true}></iz-checkbox>`
    );
    expect(el.checked).to.be.true;
  });

  it('should submit value', async () => {
    const cb = sinon.spy();
    const el = await fixture<HTMLFormElement>(
      html`<form
        @submit=${(event: Event) => {
          event.preventDefault();

          cb(new FormData(event.target as HTMLFormElement).get('foo'));
        }}
      >
        <iz-checkbox name="foo" ?checked=${true}></iz-checkbox
        ><input id="submit" type="submit" />
      </form>`
    );

    el.querySelector<HTMLInputElement>('#submit')!.click();

    expect(cb).to.have.been.callCount(1);
    expect(cb).to.have.been.calledWith();
    // const formdata = new FormData(target);

    // expect(formdata.get("foo")).to.be.equal("false");
  });

  it('should be disabled', async () => {
    const el = await fixture<Checkbox>(
      html`<iz-checkbox ?disabled=${true}></iz-checkbox>`
    );
    el.click();

    expect(el.checked).to.be.false;
  });

  it.skip('passes the a11y audit', async () => {
    const el = await fixture<Checkbox>(html`<iz-checkbox>Label</iz-checkbox>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
