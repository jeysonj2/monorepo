import { html, PropertyValueMap } from 'lit';
import { property, query, state } from 'lit/decorators.js';

// web components
import '@interzero/dropdown-button/wc';
import '@interzero/popover/wc';
import '@interzero-tools/translate/wc';

// classes
import { Option } from '@interzero/option';
import { InputTemplate } from '@interzero/input-template';
import { DropdownButton } from '@interzero/dropdown-button';
import { Translate } from '@interzero-tools/translate';

// types
import type { Placement } from '@interzero/popover';
import type { Variant } from '@interzero/dropdown-button';
import type { ChangeEvent as OptionChangeEvent } from '@interzero/option';
import type { InputEventChangeInfo } from '@interzero/input-template';

// style import
import { style } from './style.css.js';

const TEXT_THRESHOLD = 22;

// types & interfaces
export type DropdownMode = 'strict' | 'loose';
export type SearchEvent = { value: string };
export type ChangeEvent = { value: string; name?: string };
type OptionItem = { checked: boolean; text: string };

export class Dropdown extends InputTemplate {
  static styles = style;

  // properties
  @property({ type: Boolean }) multiple = false;

  @property({ type: Boolean }) dontshowselected = false;

  @property() placement: Placement = 'bottom-right';

  @property() fixedText?: string;

  @property() placeholder?: string;

  @property() variant: Variant = 'default';

  @property() dropdownMode: DropdownMode = 'strict';

  // queries
  @query('iz-translate') translateElement!: Translate;

  // states
  @state() text!: string;

  @state() count!: string;

  private fixedtextslot: boolean = false;

  private valueMap: Map<string, OptionItem> = new Map();

  private size: number = 0;

  get Size() {
    return this.size;
  }

  attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ): void {
    super.attributeChangedCallback(name, _old, value);

    if (name === 'value' || name === 'defaultValue') {
      this.updateValue(value);
    }
    if (name === 'fixedText') {
      this.updateText();
    }
  }

  firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.firstUpdated(_changedProperties);
    this.updateText();
  }

  public updateValue(value: string | null) {
    const values = value?.split(',');
    this.dispatchEvent(
      new CustomEvent('value-changed', { detail: { value, values } })
    );
  }

  // event handlers
  private handleItemToggle = (_event: Event) => {
    const event = _event as CustomEvent<OptionChangeEvent>;
    event.preventDefault();

    const item: OptionItem = {
      checked: event.detail.checked,
      text: event.detail.text,
    };

    if (!this.multiple) {
      this.valueMap.clear();
      this.dispatchEvent(new CustomEvent('clear-options', event));
    }
    this.valueMap.set(event.detail.value, item);

    const values: string[] = [];
    this.size = 0;
    for (const [value, valueMapItem] of this.valueMap.entries()) {
      if (valueMapItem.checked) {
        this.size += 1;
        values.push(value);
      }
    }

    this.updateText();

    // NOTE required ? should we pass event ?
    // should to do extensive testing on InputHiddenTemplate (to see if required is captured!)
    const joinedValues = values.join();
    this.dispatchEvent(
      new CustomEvent<ChangeEvent>('change', {
        detail: { value: joinedValues, name: this.name },
      })
    );
    this.updateHidden(joinedValues);
  };

  private handleSlotChange = (event: Event) => {
    const slot = event.currentTarget as HTMLSlotElement;
    if (slot.name === 'text') {
      this.fixedtextslot = true;
      this.updateText();
      return;
    }
    slot.assignedNodes().forEach(node => {
      if (node.nodeName.toLowerCase() === 'iz-option') {
        const option = node as Option;
        if (!option.hasAttribute('dropdown-registered')) {
          option.setAttribute('dropdown-registered', 'true');
          // option.setAttribute("variant", this.variant); // this is set from outside
          option.addEventListener('change', this.handleItemToggle);
          // NOTE this has to be set last so the events are registered!
          option.ConnectDropdown(this);
        }
      }
    });
  };

  private handlePopoverClose = () => {
    const button = this.shadowRoot?.querySelector('iz-dropdown-button');
    if (button instanceof DropdownButton) {
      button.open = false;
    }
  };

  private handleInputChange(_event: Event) {
    const event = _event as CustomEvent<InputEventChangeInfo>;
    this.dispatchEvent(new CustomEvent<SearchEvent>('search', event));

    if (this.dropdownMode === 'loose') {
      // choose value
      this.updateHidden(event.detail.value);
      this.dispatchEvent(
        new CustomEvent<ChangeEvent>('change', {
          detail: { value: event.detail.value, name: this.name },
        })
      );
    }

    // else
    // {
    //   // do something
    // }
  }

  // helper functions
  private async updateText() {
    if (!(this.translateElement instanceof Translate)) return;
    if (this.fixedtextslot) {
      this.translateElement.innerText = '';
      return;
    }

    let text = this.placeholder || 'Dropdown';
    let count = '';
    if (this.fixedText) text = this.fixedText;
    else if (!this.dontshowselected && this.size > 0) {
      const texts = [];
      for (const item of this.valueMap.values()) {
        if (item.checked) {
          texts.push(item.text);
        }
      }

      const joinedTexts = texts.join();
      if (joinedTexts.length > TEXT_THRESHOLD) {
        count = texts.length.toString();
        text = '{count} selected items';
      } else text = joinedTexts;
    }

    this.translateElement.setAttribute('count', count);
    this.translateElement.innerText = text;
  }

  render() {
    // TODO remove text slot ? maybe it can be useful later..
    return html`
      <iz-dropdown-button
        id="target"
        ?disabled=${this.disabled}
        .variant=${this.variant}
        .direction=${this.placement.startsWith('top') ? 'up' : 'down'}
        @input-change=${this.handleInputChange}
      >
        <iz-translate></iz-translate>
        <slot name="text" @slotchange=${this.handleSlotChange}></slot>
      </iz-dropdown-button>
      <iz-popover
        @popover-close=${this.handlePopoverClose}
        hideonoutsideclick
        revealBy="click"
        target="#target"
        placement=${this.placement}
      >
        <div class="card" @change=${this.handleItemToggle}>
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      </iz-popover>
    `;
  }
}
