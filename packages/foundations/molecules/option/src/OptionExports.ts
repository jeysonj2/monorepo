import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// components
import '@interzero/button/wc';
import '@interzero/checkbox/wc';

// style import
import { style } from './style.css';

// types & interfaces
export type ChangeEvent = { checked: boolean; value: string; text: string };
export enum Variant {
  plain = 'plain',
  default = 'default',
  empty = 'empty',
}

type DropdownValueChangeEvent = {
  value: string | null;
  values: string[] | undefined;
};

export class Option extends LitElement {
  static styles = style;

  @property() variant: Variant = Variant.default;

  @property() value!: string;

  @property({
    type: Boolean,
    converter: value =>
      !!['true', true, ''].includes((value || '').toLowerCase()),
  })
  checked: boolean = false;

  private text!: string;

  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
  }

  private handleClick(event: Event) {
    event.stopPropagation();
    this.checked = !this.checked;
    this.dispatchChange();
  }

  private handleSlotChange = (event: Event) => {
    const slot = event.currentTarget as HTMLSlotElement;
    const nodetext = slot.assignedNodes()?.[0].textContent;
    if (nodetext != null) {
      // checks also undefined
      this.text = nodetext;
    }
  };

  private dispatchChange() {
    this.dispatchEvent(
      new CustomEvent<ChangeEvent>('change', {
        detail: { checked: this.checked, value: this.value, text: this.text },
      })
    );
  }

  public ConnectDropdown = (element: Element) => {
    // check if it has
    const dropdown = element as HTMLInputElement;
    const dvalue = (dropdown.value || dropdown.defaultValue || '').split(',');
    if (dvalue.includes(this.value)) {
      this.checked = true;
      if (this.text) {
        this.dispatchChange();
      }

      setTimeout(() => this.dispatchChange(), 1);
    }

    dropdown.addEventListener('clear-options', (event: Event) => {
      const cevent = event as CustomEvent<ChangeEvent>;
      if (cevent.detail.value !== this.value) this.checked = false;
    });

    dropdown.addEventListener('value-changed', (event: Event) => {
      const cevent = event as CustomEvent<DropdownValueChangeEvent>;
      if (cevent.detail.values?.includes(this.value)) {
        this.checked = true;
        this.dispatchChange();
      }
    });
  };

  attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ): void {
    super.attributeChangedCallback(name, _old, value);

    if (name === 'checked') {
      this.dispatchChange();
    }
  }

  render() {
    return html`
      <iz-button variant="text">
        <div>
          <slot @slotchange=${this.handleSlotChange}></slot>
          ${this.variant !== 'empty'
            ? html`<iz-checkbox
                variant=${this.variant}
                checked=${this.checked}
              ></iz-checkbox>`
            : ''}
        </div>
      </iz-button>
    `;
  }
}
