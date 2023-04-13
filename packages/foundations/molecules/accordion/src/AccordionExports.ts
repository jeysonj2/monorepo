import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
import '@interzero-icons/icon-arrow/wc';
import '@interzero/button/wc';

// style import
import { style } from './style.css.js';

// helper functions
function BooleanConverter(value: string | null) {
  return !!['true', true, ''].includes((value || '').toLowerCase());
}

// types & interfaces
export type Direction = 'up' | 'down';
export type ExpandMode = 'partial' | 'full';

export class Accordion extends LitElement {
  static styles = style;

  private inneropen = false;

  @property({ type: String }) direction: Direction = 'down';

  @property({ type: String }) expandMode: ExpandMode = 'partial';

  // TODO should create a custom decorator with booleanconverter and this logic embedded !
  @property({ type: Boolean, converter: BooleanConverter })
  set open(value: boolean) {
    if (this.inneropen) {
      // to avoid setting twice
      this.inneropen = false;
      return;
    }
    if (this.getAttribute('open') !== value.toString()) {
      // this will cause another fire
      this.inneropen = true;
      this.setAttribute('open', value.toString());
    }
    this._open = value;
  }

  get open() {
    return this._open;
  }

  _open: boolean = false;

  connectedCallback(): void {
    super.connectedCallback();
    if (!this.hasAttribute('open'))
      this.setAttribute('open', this.open.toString());
    if (!this.hasAttribute('expandmode'))
      this.setAttribute('expandmode', this.expandMode);
    if (!this.hasAttribute('direction'))
      this.setAttribute('direction', this.direction);
  }

  public toggle() {
    this.open = !this.open;
  }

  render() {
    return html`
      <header>
        <slot name="title"></slot>
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
