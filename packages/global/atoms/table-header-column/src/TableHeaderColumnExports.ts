import { html, LitElement } from 'lit';
import { property, state, query } from 'lit/decorators.js';

// web-components 
import "@interzero-icons/icon-caret/wc";
import "@interzero/button/wc";
import "@interzero/input/wc";

// classes
import { Input } from '@interzero/input';

// style import
import { style } from './style.css.js';

// helper functions
function BooleanConverter(value: string | null) {
  return !!['true', true, ''].includes((value || '').toLowerCase());
}

// types & interfaces
export type SortDirection = 'down' | 'up' | 'default';
export type SortEvent = { direction: SortDirection };
export type SearchEvent = { value: string };

export class TableHeaderColumn extends LitElement {
  static styles = style;

  @property({ type: Boolean, converter: BooleanConverter }) searchable: boolean = false;
  @property({ type: Boolean, converter: BooleanConverter }) sortable: boolean = false;

  @state() sortDirection: SortDirection = 'default';
  @query('iz-input') inputElement?: Input;

  private internalChange: boolean = false;

  // event handlers 
  private handleClick() {
    if (this.sortable)
    {
      if (this.sortDirection === 'default')
      {
        this.sortDirection = 'up';
      }
      else if (this.sortDirection === 'up')
      {
        this.sortDirection = 'down';
      }
      else {
        this.sortDirection = 'default';
      }

      this.dispatchEvent(new CustomEvent<SortEvent>("sort", { detail: { direction: this.sortDirection }}));
    }
  }

  private handleSearch(event:Event) {
    if (this.internalChange) {
      this.internalChange = false;
      return;
    }

    const { value } = event.target as HTMLInputElement;
    this.dispatchEvent(new CustomEvent<SearchEvent>("search", { detail: { value }}));
  }

  // public function
  public reset() {
    this.internalChange = true;
    this.sortDirection = 'default';
    if (this.inputElement) this.inputElement.reset();
  }

  render() {
    return html`
      <iz-button variant="text" @click=${this.handleClick} size="medium">
        <slot></slot>
        ${this.sortable ? html`
          <div slot="right" class="sort-container">
            <iz-icon-caret rotate="180" class=${this.sortDirection === "up" ? "selected" : ""}></iz-icon-caret>
            <iz-icon-caret class=${this.sortDirection === "down" ? "selected" : ""}></iz-icon-caret>
          </div>`
        : null}
      </iz-button>
      ${this.searchable ? html`
        <iz-input size="medium" placeholder="Search" @suspended-input-change=${this.handleSearch}></iz-input>
      `: null}
    `;
  }
}
