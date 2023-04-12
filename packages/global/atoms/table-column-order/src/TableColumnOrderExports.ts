import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';

// tools
import '@interzero-tools/translate/wc';
// foundations - atoms
import '@interzero/button/wc';
import '@interzero/checkbox/wc';
import '@interzero/input/wc';
// foundations - molecules
import '@interzero/list-item/wc';
import '@interzero/field/wc';
// foundations - organisms
import '@interzero/list/wc';
import '@interzero/popup/wc';

// classes & types import
import { Popup } from '@interzero/popup';
import type { ChangeEvent } from '@interzero/checkbox';
import type { OrderCompleteEvent } from '@interzero/list';

// style import
import { style } from './style.css.js';

// types & interfaces
function BooleanConverter(value: string | null) {
  return !!['true', true, ''].includes((value || '').toLowerCase());
}
export type Column = { id: string; name: string; checked: boolean };
export type SaveEvent = {
  columns: Column[];
  preset: string | null;
};

export class TableColumnOrder extends LitElement {
  static styles = style;

  private savepreset = false;

  private internalhide = false;

  private presetname: string | null = null;

  private innercolumns: Column[] = [];

  @property({ type: Boolean, converter: BooleanConverter }) open: boolean =
    false;

  @property({ type: Array })
  set columns(value: Column[]) {
    this._columns = value;
    this.innercolumns = JSON.parse(JSON.stringify(value));
    this.requestUpdate();
  }

  get columns() {
    return this._columns;
  }

  _columns: Column[] = [];

  @query('#main') private mainPopup!: Popup;

  @query('#preset') private presetPopup!: Popup;

  // class functions
  attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ): void {
    super.attributeChangedCallback(name, _old, value);
    if (name === 'open') {
      setTimeout(this.toggle, 1);
    }
  }

  // event handlers
  private handleFirstSave() {
    if (this.savepreset) {
      this.internalhide = true;
      setTimeout(() => {
        this.presetPopup.show();
      }, 300);
    } else {
      this.save();
    }

    this.mainPopup.hide();
  }

  private handleSecondSave() {
    this.save();
  }

  private handlePresetChange(event: Event) {
    if (event instanceof CustomEvent<ChangeEvent>) {
      this.savepreset = event.detail.checked;
    }
  }

  private handleOrdering(event: CustomEvent<OrderCompleteEvent>) {
    const newarr: Column[] = [];
    for (let i = 0; i < event.detail.children.length; i += 1) {
      const data = this.innercolumns.find(
        d => d.id === event.detail.children[i].id
      );
      if (data) {
        newarr.push(data);
      }
    }
    this.innercolumns = newarr;
  }

  private handleItemCheck(event: CustomEvent<ChangeEvent>) {
    const { target } = event;
    if (target instanceof HTMLElement) {
      const column = this.innercolumns.find(
        c => c.id === target.getAttribute('data-id')
      );
      if (column) {
        column.checked = event.detail.checked;
      }
    }
  }

  private handlePresetInput(event: Event) {
    this.presetname = (event.target as HTMLInputElement).value;
  }

  private handleHide() {
    if (!this.internalhide) {
      this.reset();
    }

    this.internalhide = false;
  }

  // private functions
  private save() {
    this.dispatchEvent(
      new CustomEvent<SaveEvent>('save', {
        detail: {
          columns: this.innercolumns,
          preset: this.presetname,
        },
      })
    );

    this.hide();
  }

  private toggle = () => {
    if (this.mainPopup) {
      if (this.open) {
        this.show();
      } else {
        this.hide();
      }
    }
  };

  private reset() {
    this.innercolumns = [];
    this.presetname = '';
    this.savepreset = false;
    this.requestUpdate();

    setTimeout(() => {
      this.innercolumns = JSON.parse(JSON.stringify(this.columns));
      this.requestUpdate();
    }, 1);
  }

  // public functions
  public show() {
    this.mainPopup.show();
  }

  public hide() {
    this.internalhide = true;
    this.presetPopup.hide();
    this.mainPopup.hide();
    this.reset();
  }

  render() {
    return html`
      <iz-popup
        @popup-hide=${this.handleHide}
        variant="parent"
        id="main"
        hideonoutsideclick
        headerTitle="Order Columns"
      >
        <iz-list @order-complete=${this.handleOrdering}>
          ${this.innercolumns.map(
            c => html`
              <iz-list-item isDeletable="false" id=${c.id}>
                <iz-checkbox
                  checked=${c.checked}
                  data-id=${c.id}
                  @change=${this.handleItemCheck}
                  label=${c.name}
                ></iz-checkbox>
              </iz-list-item>
            `
          )}
        </iz-list>

        <iz-button slot="footer" @click=${this.handleFirstSave}>
          <iz-translate>Save</iz-translate>
        </iz-button>
        <iz-checkbox
          slot="footer"
          @change=${this.handlePresetChange}
          label="Save as preset"
        ></iz-checkbox>
      </iz-popup>
      <iz-popup
        @popup-hide=${this.handleHide}
        variant="parent"
        id="preset"
        hideonoutsideclick
        headerTitle="Save as Preset"
      >
        <iz-field label="Preset name">
          <iz-input
            @input=${this.handlePresetInput}
            required
            .errors=${{ valueMissing: 'Please choose a name for the preset' }}
          ></iz-input>
        </iz-field>

        <iz-button slot="footer" @click=${this.handleSecondSave}>
          <iz-translate>Save</iz-translate>
        </iz-button>
      </iz-popup>
    `;
  }
}
