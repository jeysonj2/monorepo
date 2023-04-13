import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';

// web-components
import '@interzero-icons/icon-arrow/wc';
import '@interzero/button/wc';

import { ReactiveProperty } from '@interzero-tools/decorators';

// style import
import { style } from './style.css.js';

// types & interfaces
export type Direction = 'up' | 'down';
export type ExpandMode = 'partial' | 'full';

export class Accordion extends LitElement {
  static styles = style;

  @property({ type: String }) direction: Direction = 'down';

  @property({ type: String }) expandMode: ExpandMode = 'partial';

  @query('main') mainElement!: HTMLElement;

  @ReactiveProperty({ type: Boolean, trigger: true }) open: boolean = false;

  connectedCallback(): void {
    super.connectedCallback();
    if (!this.hasAttribute('open'))
      this.setAttribute('open', this.open.toString());
    if (!this.hasAttribute('expandmode'))
      this.setAttribute('expandmode', this.expandMode);
    if (!this.hasAttribute('direction'))
      this.setAttribute('direction', this.direction);
  }

  constructor() {
    super();

    this.addEventListener('open-change', this.handleOpenChange);
  }

  private handleOpenChange() {
    let value = '0px';
    if (this.open)
    {
      if (this.expandMode === 'full') 
      {
        value = this.scrollHeight+"px";
      }
      else if (this.mainElement) 
      {
        value = this.mainElement.scrollHeight+"px";
      }
    }
    this.style.setProperty("--accordion-max-height", value);
  }

  public toggle() {
    this.open = !this.open;
  }

  render() {
    return html`
      <header>
        <slot name="title"><span></span></slot>
        <iz-button @click=${this.toggle} size="medium" variant="square">
          <slot name="icon"><iz-icon-arrow size="medium"></iz-icon-arrow></slot>
        </iz-button>
      </header>
      <main>
        <slot></slot>
      </main>
    `;
  }
}
