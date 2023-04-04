import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
import '@interzero/input/wc';
import '@interzero/option/wc';
import '@interzero/dropdown/wc';
import '@interzero/list-item/wc';

// tools
import '@interzero-tools/translate/wc';

// types 
import type { InputEventChangeInfo } from '@interzero/input-template';

// style import
import { style } from './style.css.js';

// types & interfaces
export type FilterType = "equal-to"|"contains"|"begins-with"|"in-between"|"not-equal-to"|"greater-then"|"less-then";
export type ChangeEvent = { value: string, column: string, filter: FilterType }
export type Column = { id: string; name: string };
type InputType = "column"|"filter"|"value";

export class TableFilter extends LitElement {
  static styles = style;

  @property({ type: Array }) columns: Column[] = [];

  private _column: string = "";
  private _filter: string = "";
  private _value: string = "";

  // event handlers
  private handleChange(type:InputType) {
    return (event:CustomEvent<InputEventChangeInfo>) => {
      this[`_${type}`] = event.detail.value;

      if (this._column && this._filter && this._value)
      {
        this.dispatchEvent(new CustomEvent<ChangeEvent>("change", {
          detail: {
            value: this._value,
            column: this._column,
            filter: this._filter as FilterType,
          }
        }))
      } 
    }
  }

  render() {
    return html`
      <iz-list-item .draggable=${false}>
        <div>
        <iz-dropdown variant="input" @suspended-input-change=${this.handleChange("column")}>
          ${this.columns.map(column => html`<iz-option value=${column.id}>${column.name}</iz-option>`)}
        </iz-dropdown>
        <iz-dropdown variant="input" @suspended-input-change=${this.handleChange("filter")}>
          <iz-option value="equal-to">
            <iz-translate>equal to</iz-translate>
          </iz-option>
          <iz-option value="contains">
            <iz-translate>contains</iz-translate>
          </iz-option>
          <iz-option value="begins-with">
            <iz-translate>begins with</iz-translate>
          </iz-option>
          <iz-option value="in-between">
            <iz-translate>in between</iz-translate>
          </iz-option>
          <iz-option value="not-equal-to">
            <iz-translate>not equal to</iz-translate>
          </iz-option>
          <iz-option value="greater-then">
            <iz-translate>greater then</iz-translate>
          </iz-option>
          <iz-option value="less-then">
            <iz-translate>less then</iz-translate>
          </iz-option>
        </iz-dropdown>
        <iz-input @suspended-input-change=${this.handleChange("value")} placeholder="Type value"></iz-input>
        </div>
      </iz-list-item>
    `;
  }
}