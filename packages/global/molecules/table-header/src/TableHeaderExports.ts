import { html, LitElement, PropertyValueMap } from 'lit';
import { property, query } from 'lit/decorators.js';

// web-components
import "@interzero/button/wc";
import "@interzero/accordion/wc";
import "@interzero/drag-indicator/wc";
import "@interzero-icons/icon-cog/wc";
import "@interzero-global/table-header-column/wc";

// tools
import { ReactiveProperty } from '@interzero-tools/decorators';
import { CumulativeOffset } from '@interzero-tools/utils';

// classes & types 
import { TableHeaderColumn } from '@interzero-global/table-header-column';
import { Accordion } from '@interzero/accordion';
import type { SearchEvent, SortEvent } from '@interzero-global/table-header-column';
import type { PressEvent } from '@interzero/drag-indicator';

// style import
import { style } from './style.css.js';

// types & interfaces
export type { SearchEvent, SortEvent } from '@interzero-global/table-header-column';
export type Column = { id: string; value: string; searchable: boolean; sortable: boolean; }
export type ActionType = "sort" | "search";
export type ActionEvent = { type: ActionType; event: SearchEvent | SortEvent; column: Column;  }
export type DragInfo = { element: TableHeaderColumn; start: number };
export type Offset = {top:number, left: number};
export class TableHeader extends LitElement {
  static styles = style;

  @ReactiveProperty({ type: Array, trigger: true }) columns: Column[] = [];
  @ReactiveProperty({ type: Boolean }) resizable: boolean = false;

  @query('div.columns') columnContainer!: HTMLDivElement;
  @query('iz-accordion') accordionElement!: Accordion;

  private draginfo:DragInfo|null = null;
  private offset:Offset = {top:0,left:0};

  // class functions
  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener("mousemove", this.handleResize);

    this.addEventListener('columns-change', this.handleColumnsChange);

    setTimeout(() => {
      // at least call it once
      this.handleWindowResize();
      
    }, 10);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener("mousemove", this.handleResize);
  }

  // private functions
  private handleWindowResize = () => {
    this.offset = CumulativeOffset(this);
  };

  // event handlers
  private handleAction(type: ActionType, column:Column) {
    return (event:CustomEvent<SearchEvent>) => {
      // we should tell everyone else to reset
      // event.target
      if (this.columnContainer)
      {
        for(let i=0; i<this.columnContainer.children.length; i+=1)
        {
          const child = this.columnContainer.children[i];
          if (child instanceof TableHeaderColumn && child !== event.target)
          {
            child.reset();
          }
        }
      }

      this.dispatchEvent(new CustomEvent<ActionEvent>("action", { detail: { event: event.detail, type, column } }));
    }
  }
  private handleSettingClick(event:Event) {
    if (event.currentTarget instanceof HTMLElement)
    {
      event.currentTarget.classList.toggle('open');
      
      if (this.accordionElement)
      {
        this.accordionElement.toggle();
      }
    }
  }
  private handleReziseStart(event:CustomEvent<PressEvent>) {
    
    if (event.currentTarget instanceof HTMLElement)
    {
      const target = event.currentTarget.previousElementSibling;
      if (target instanceof TableHeaderColumn)
      {
        const box = target.getBoundingClientRect();
        target.setAttribute('data-width', box.width.toString());
        this.draginfo =  {start: event.detail.pageX, element: target }
      }
    }
  }
  private handleResizeStop() {
    this.draginfo = null;    
  }
  private handleResize = (event:MouseEvent) => {
    if (this.draginfo)
    {
      const container_y = event.pageY - this.offset.top;
      const container_x = event.pageX - this.offset.left;

      if (container_x >= 0 && container_x <= this.scrollWidth && container_y >= 0 && container_y <= this.scrollHeight)
      {
        const diff = event.pageX - this.draginfo.start;
        const original_width = Number(this.draginfo.element.getAttribute('data-width'));
        const width = Math.max(original_width + diff, 30);
        // console.log('width', width);
        this.draginfo.element.style.width = width + "px";
      }
      else this.draginfo = null;
    }
  }
  private handleColumnsChange = () => {
    if (!this.resizable) return;

    setTimeout(() => {
      const elements = this.shadowRoot?.querySelectorAll<TableHeaderColumn>("iz-global-table-header-column");
      if (elements)
      {
        const widths:number[] = [];
        // need to first get the widths 
        for (let i=0; i<elements.length; i++)
        {
          widths.push(elements[i].getBoundingClientRect().width);
        }
        // and then assign or else the last elements would get larger
        for (let i=0; i<elements.length; i++)
        {
          elements[i].style.setProperty('width', `calc(${widths[i]}px - 1rem)`);
        }
      }
    }, 10)
  }

  render() {
    return html`
      <iz-accordion expandMode="full" direction="up">
        <p>wow im some setting</p>
        <p>wow im some setting</p>
        <p>wow im some setting</p>
        <p>wow im some setting</p>
      </iz-accordion>
      <header>
        <div class="columns">
          ${this.columns.map(column => html`
            <iz-global-table-header-column 
              ?sortable=${column.sortable} 
              ?searchable=${column.searchable}
              @sort=${this.handleAction("sort", column)}
              @search=${this.handleAction("search", column)}
            >
              ${column.value}
            </iz-global-table-header-column>
            ${this.resizable ? html`
              <iz-drag-indicator @pressed=${this.handleReziseStart} @released=${this.handleResizeStop} alignment="vertical"></iz-drag-indicator>
            `:null}
          `)}
        </div>
        <div>
          <iz-button @click=${this.handleSettingClick} size="large" variant="circle">
            <slot name="setting-icon"><iz-icon-cog size="large"></iz-icon-cog></slot>
          </iz-button>
        </div>
      </header>
    `;
  }
}
