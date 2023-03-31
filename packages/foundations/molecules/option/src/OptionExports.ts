import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// components
import '@interzero/button/wc';
import '@interzero/checkbox/wc';

// style import
import { style } from './style.css.js';

// types & interfaces
export type ChangeEvent = { checked: boolean; value: string; text: string };
export type Variant = 'plain' | 'default' | 'empty';

type DropdownSearchEvent = { value: string };
type DropdownValueChangeEvent = {
  value: string | null;
  values: string[] | undefined;
};

export class Option extends LitElement {
  static styles = style;

  @property() variant: Variant = 'default';

  @property() value!: string;

  @property({
    type: Boolean,
    converter: value =>
      !!['true', true, ''].includes((value || '').toLowerCase()),
  })
  checked: boolean = false;

  private text!: string;
  private hide = false;
  
  // to not set checked = false on clear
  private internalTrigger = false; 

  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
  }

  private handleClick = (event: Event) => {
    event.stopPropagation();
    this.internalTrigger = true;
    this.checked = !this.checked;
    this.dispatchChange();
  }

  private handleSlotChange = (event: Event) => {
    const slot = event.currentTarget as HTMLSlotElement;
    const nodes = slot.assignedNodes();
    if (nodes.length === 1)
    {
      const nodetext = nodes[0].textContent;
      if (nodetext != null) {
        // checks also undefined
        this.text = nodetext;
      }
    }
    else 
    { // we assume its with translate ()
      // TODO extractor function that could extract any text any levels deep? (useful for many cases)
      for (let node of nodes)
      {
        if (node.nodeName.toUpperCase() === 'IZ-TRANSLATE')
        {
          this.text = (node as HTMLElement).innerText;
          break;
        }
      }
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

      // NOTE this feels uncessesary
      // if (this.text) {
      //   this.dispatchChange();
      // }

      setTimeout(() => this.dispatchChange(), 1);
    }

    dropdown.addEventListener('clear-options', (event: Event) => {
      if (!this.internalTrigger) this.checked = false;
      this.internalTrigger = false;
    });

    dropdown.addEventListener('value-changed', (event: Event) => {
      const cevent = event as CustomEvent<DropdownValueChangeEvent>;
      if (cevent.detail.values?.includes(this.value)) {
        this.checked = true;
        this.dispatchChange();
      }
    });

    dropdown.addEventListener('search', (_event: Event) => {
      const event = _event as CustomEvent<DropdownSearchEvent>;
      if (event.detail.value === '') {
        // show
        this.hide = false;
      } else if (
        this.text.match(event.detail.value) ||
        event.detail.value.match(this.text)
      ) {
        // show
        this.hide = false;
      } else {
        // hide
        this.hide = true;
      }

      this.requestUpdate();
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
    if (this.hide) return null;

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
