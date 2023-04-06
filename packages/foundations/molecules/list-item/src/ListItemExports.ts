import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
import '@interzero/button/wc';

// icons
import '@interzero-icons/icon-close/wc';
import '@interzero-icons/icon-list/wc';

// types
import type { Size } from '@interzero/button';

// style import
import { style } from './style.css.js';

// types
// FIXME with type file + ?abstract class definition
// eslint-disable-next-line no-use-before-define
export type DragStartEvent = { target: ListItem; pageX: number; pageY: number };

// converter
function booleanConvert(value: string | null) {
  return !!['true', true, ''].includes((value || '').toLowerCase());
}
export class ListItem extends LitElement {
  static styles = style;

  @property({ type: Boolean, converter: booleanConvert }) isDeletable = true;

  @property({ type: Boolean, converter: booleanConvert }) isDraggable = true;

  @property({ type: Boolean }) dragged: boolean = false;

  @property() size: Size = 'medium';

  // class functions
  connectedCallback(): void {
    super.connectedCallback();

    if (!this.hasAttribute('isDraggable'))
      this.setAttribute('isDraggable', 'true');
    if (!this.hasAttribute('size')) this.setAttribute('size', this.size);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // event functions
  private handleMouseDown(event: MouseEvent) {
    if (!this.isDraggable) return;
    this.dispatchEvent(
      new CustomEvent<DragStartEvent>('drag-start', {
        detail: { target: this, pageX: event.pageX, pageY: event.pageY },
      })
    );
  }

  private handleRemove(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.classList.remove('dragged');
    this.dispatchEvent(new Event('remove'));
  }

  render() {
    return html`
      <div
        @mousedown=${this.handleMouseDown}
        class=${['item', this.dragged ? 'dragged' : ''].join(' ')}
      >
        <div><slot></slot></div>
        ${this.dragged
          ? html`<iz-icon-list size="large" density="medium"></iz-icon-list>`
          : null}
      </div>
      ${this.isDeletable && !this.dragged
        ? html`
            <iz-button
              @click=${this.handleRemove}
              size=${this.size}
              variant="square"
            >
              <iz-icon-close></iz-icon-close>
            </iz-button>
          `
        : null}
    `;
  }
}
