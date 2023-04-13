import { html, LitElement } from 'lit';

import { ReactiveProperty } from '@interzero-tools/decorators';

// style import
import { style } from './style.css.js';

export type Alignment = 'horizontal' | 'vertical';
export type PressEvent = { clientX: number; clientY: number; pageX: number; pageY: number; screenX: number; screenY: number; };
export class DragIndicator extends LitElement {
  static styles = style;

  @ReactiveProperty({ type: String }) alignment: Alignment = 'horizontal';

  private pressed: boolean = false;

  connectedCallback(): void {
    super.connectedCallback();
    if ('ontouchstart' in window) {
      this.addEventListener('touchstart', this.handleTouchDown);
      window.addEventListener('touchend', this.handleUp);
    } else {
      this.addEventListener('mousedown', this.handleMouseDown);
      window.addEventListener('mouseup', this.handleUp);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if ('ontouchstart' in window) {
      this.removeEventListener('touchstart', this.handleTouchDown);
      window.removeEventListener('touchend', this.handleUp);
    } else {
      this.removeEventListener('mousedown', this.handleMouseDown);
      window.removeEventListener('mouseup', this.handleUp);
    }
  }

  // event handlers
  private handleTouchDown = (events:TouchEvent) => {
    this.pressed = true;
    const event = events.touches[0];
    this.dispatchEvent(new CustomEvent<PressEvent>('pressed', {
      detail: { clientX: event.clientX, clientY: event.clientY, pageX: event.pageX, pageY: event.pageY, screenX: event.screenX, screenY: event.screenY }
    }));
  };
  private handleMouseDown = (event:MouseEvent) => {
    this.pressed = true;
    this.dispatchEvent(new CustomEvent<PressEvent>('pressed', {
      detail: { clientX: event.clientX, clientY: event.clientY, pageX: event.pageX, pageY: event.pageY, screenX: event.screenX, screenY: event.screenY }
    }));
  };
  private handleUp = () => {
    if (!this.pressed) return;
    this.pressed = false;
    this.dispatchEvent(new Event('released'));
  };

  render() {
    return html` <span></span> `;
  }
}
