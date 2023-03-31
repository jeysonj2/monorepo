import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';

// web-components
import '@interzero-tools/translate/wc';
import '@interzero/button/wc';
import '@interzero/link/wc';
import '@interzero/list/wc';
import '@interzero/popup/wc';
import '@interzero-global/table-filter/wc';

// classes
import { Popup } from '@interzero/popup';
// types
import type {
  Column,
  ChangeEvent,
  Data as Filter,
} from '@interzero-global/table-filter';

// style import
import { style } from './style.css.js';

export function BooleanConverter(value: string | null) {
  return !!['true', true, ''].includes((value || '').toLowerCase());
}
// types & interfaces
export type { Column, Data as Filter } from '@interzero-global/table-filter';
export type SaveEvent = { filters: Filter[] };
export class TableFilterPopup extends LitElement {
  static styles = style;

  @property({ type: Boolean, converter: BooleanConverter }) open: boolean =
    false;

  @property({ type: Array }) columns: Column[] = [];

  @property({ type: Array }) filters: Partial<Filter>[] = [];

  @query('iz-popup') popupElement!: Popup;

  // class functions
  attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ): void {
    super.attributeChangedCallback(name, _old, value);
    if (name === 'open') {
      setTimeout(() => {
        if (value === null) {
          this.hide();
        } else {
          this.show();
        }
      }, 1);
    }
  }

  // event listeners
  private handleFilterItemChange(event: Event) {
    if (
      event instanceof CustomEvent<ChangeEvent> &&
      event.target instanceof HTMLElement
    ) {
      this.filters[Number(event.target.getAttribute('data-index'))] =
        event.detail;
    }
  }

  private handleAddClick = (event: Event) => {
    event.preventDefault();
    this.filters.push({});
    this.requestUpdate();
  };

  private handleSave() {
    this.dispatchEvent(
      new CustomEvent<SaveEvent>('save', {
        detail: {
          filters: this.filters.filter(
            f => f.value && f.column && f.filter
          ) as Filter[],
        },
      })
    );

    this.hide();
  }

  // public functions
  public show() {
    this.popupElement.show();
  }

  public hide() {
    this.popupElement.hide();
  }

  render() {
    return html`
      <iz-popup variant="parent" headerTitle="Filter Columns">
        <iz-list>
          ${this.filters.map(
            (filter, index) => html` <iz-global-table-filter
              data-index=${index}
              @change=${this.handleFilterItemChange}
              .columns=${this.columns}
              .data=${filter}
            ></iz-global-table-filter>`
          )}
        </iz-list>
        <iz-link href="#add" @click=${this.handleAddClick}>
          <iz-translate>+ Add Filter</iz-translate>
        </iz-link>

        <footer slot="footer">
          <iz-button @click=${this.handleSave}>
            <iz-translate>Save</iz-translate>
          </iz-button>
        </footer>
      </iz-popup>
    `;
  }
}
// <iz-button>
//   <iz-translate>Cancel</iz-translate>
// </iz-button>
