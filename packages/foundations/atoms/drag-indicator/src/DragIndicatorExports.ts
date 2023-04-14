import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// style import
import { style } from './style.css.js';

export type Alignment = 'horizontal' | 'vertical';
export class DragIndicator extends LitElement {
  static styles = style;

  @property({ type: String }) alignment: Alignment = 'horizontal';

  private pressed: boolean = false;

  connectedCallback(): void {
    super.connectedCallback();
    if ('ontouchstart' in window) {
      this.addEventListener('touchstart', this.handleDown);
      window.addEventListener('touchend', this.handleUp);
    } else {
      this.addEventListener('mousedown', this.handleDown);
      window.addEventListener('mouseup', this.handleUp);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if ('ontouchstart' in window) {
      this.removeEventListener('touchstart', this.handleDown);
      window.removeEventListener('touchend', this.handleUp);
    } else {
      this.removeEventListener('mousedown', this.handleDown);
      window.removeEventListener('mouseup', this.handleUp);
    }
  }

  // event handlers
  private handleDown = () => {
    this.pressed = true;
    this.dispatchEvent(new Event('pressed'));
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
