import { html } from 'lit';
import { fixture, expect, oneEvent } from '@open-wc/testing';
import { InputTemplate } from '../src/InputTemplateExports.js';
import '../src/input-template.js';

describe('InputTemplate', () => {
  it('should insert hidden input into form', async () => {
    const el = await fixture<InputTemplate>(
      html`<form><iz-input-template name="foo"></iz-input-template></form>`
    );

    expect(el.querySelector('input[hidden]')).to.exist;
  });

  it('should not insert hidden when name is missing', async () => {
    const el = await fixture<InputTemplate>(
      html`<form><iz-input-template></iz-input-template></form>`
    );

    expect(el.querySelector('input[hidden]')).to.not.exist;
  });

  it('should update value which results in submit', async () => {
    const el = await fixture<HTMLFormElement>(
      html`<form>
        <iz-input-template name="foo"></iz-input-template
        ><input type="submit" id="submit" />
      </form>`
    );

    const template = el.querySelector<InputTemplate>('iz-input-template');
    expect(template).to.exist;
    template?.updateHidden('bar');

    const submitListener = oneEvent(el, 'submit');
    el.onsubmit = e => e.preventDefault();
    const button = el.querySelector<HTMLButtonElement>('#submit');
    button?.click();

    const { target } = await submitListener;
    const formdata = new FormData(target);

    expect(formdata.get('foo')).to.be.equal('bar');
  });
});
