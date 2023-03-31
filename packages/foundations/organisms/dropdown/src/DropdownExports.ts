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
import { Popover } from '@interzero/popover';

// types
import type { Placement } from '@interzero/popover';
import type { Variant } from '@interzero/dropdown-button';
import type { ChangeEvent as OptionChangeEvent } from '@interzero/option';
import type { ChangeEvent as HiddenChangeEvent } from '@interzero/input-template';

// style import
import { style } from './style.css.js';

const TEXT_THRESHOLD = 22;

// types & interfaces
export type DropdownInputMode = 'strict' | 'loose';
export type SearchEvent = { value: string };
export type ChangeEvent = { value: string; name?: string };
type OptionItem = { checked: boolean; text: string };

export class Dropdown extends InputTemplate {
  static styles = style;

  // properties
  @property({ type: Boolean }) multiple = false;

  @property({ type: Boolean }) dontshowselected = false;

  @property({ type: Boolean }) donthideonselect = false;

  @property() placement: Placement = 'bottom-right';

  @property() fixedText?: string;

  @property() placeholder?: string;

  @property() variant: Variant = 'default';

  @property() dropdownInputMode: DropdownInputMode = 'strict';

  // queries
  @query('iz-translate') translateElement!: Translate;

  @query('iz-popover') popoverElement!: Popover;

  // states
  @state() inputtext?: string;

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
    if (!this.multiple) {
      this.size = 0;
      this.valueMap.clear();
      this.dispatchEvent(new Event('clear-options'));
    }
    this.dispatchEvent(
      new CustomEvent('value-changed', { detail: { value, values } })
    );
    this.updateText();
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
      this.dispatchEvent(new Event('clear-options'));
      if (!this.donthideonselect) this.popoverElement.closePopover();
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
      if (node instanceof Option) {
        if (!node.hasAttribute('dropdown-registered')) {
          node.setAttribute('dropdown-registered', 'true');
          // node.setAttribute("variant", this.variant); // this is set from outside
          node.addEventListener('change', this.handleItemToggle);
          // NOTE this has to be set last so the events are registered!
          node.ConnectDropdown(this);
        }
      }
    });

    setTimeout(() => {

      if (this.value) 
      {
        this.updateValue(this.value);
      }
      else if (this.defaultValue)
      {
        this.updateValue(this.defaultValue);
      }
    }, 1)
  };

  private handlePopoverClose = () => {
    const button = this.shadowRoot?.querySelector('iz-dropdown-button');
    if (button instanceof DropdownButton) {
      button.open = false;
    }

    // if (this.dropdownInputMode === 'strict')
    // {
    //   // this.inputtext = '';
    // }
  };

  private handleInputChange(_event: Event) {
    const event = _event as CustomEvent<HiddenChangeEvent>;
    this.size = 0;
    this.valueMap.clear();
    this.dispatchEvent(new Event('clear-options'));

    if (this.dropdownInputMode === 'loose') {
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
    // }

    // FIXME make sure the popover stays open!!

    this.dispatchEvent(new CustomEvent<SearchEvent>('search', event));
  }

  // helper functions
  private async updateText() {
    if (!(this.translateElement instanceof Translate)) return;
    if (this.fixedtextslot) {
      this.translateElement.innerText = '';
      return;
    }

    let text = this.placeholder || 'Dropdown';
    if (this.fixedText) text = this.fixedText;
    else if (!this.dontshowselected && this.size > 0) {
      const texts = [];
      let count = '';
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

      this.translateElement.setAttribute('count', count);
      this.translateElement.innerText = text;
      this.inputtext = this.translateElement.innerText;
      return;
    }

    this.translateElement.innerText = text;
    this.inputtext = '';
  }

  render() {
    // TODO remove text slot ? maybe it can be useful later..
    return html`
      <iz-dropdown-button
        id="target"
        ?disabled=${this.disabled}
        variant=${this.variant}
        .inputvalue=${this.inputtext}
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
        matchwidth
        placement=${this.placement}
      >
        <div class="card" @change=${this.handleItemToggle}>
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      </iz-popover>
    `;
  }
}
