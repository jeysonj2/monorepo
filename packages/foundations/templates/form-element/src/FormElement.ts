import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class FormElement extends LitElement {
  @property({
    type: Boolean,
    converter: value =>
      !!['true', true, ''].includes((value || '').toLowerCase()),
  })
  disabled: boolean = false;

  protected findFormElement(
    selector: string,
    el: HTMLElement | null
  ): HTMLFormElement | null {
    if (!el) return null;

    const closestElement = el.closest(selector);

    if (closestElement && closestElement.nodeName === 'FORM') {
      return closestElement as HTMLFormElement;
    }

    let parent = el.parentElement;
    if (parent === null) {
      parent = (el.getRootNode() as any).host;
    }
    return this.findFormElement(selector, parent);
  }
}
