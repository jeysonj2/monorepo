import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// style import
import { style } from './style.css.js';

// types & interfaces
export type Variant = 'success' | 'error' | 'info' | 'warning' | 'default';

export class Badge extends LitElement {
  static styles = style;

  @property() variant: Variant = "default";

  connectedCallback(): void {
    super.connectedCallback();
    if (!this.hasAttribute("variant")) this.setAttribute("variant", this.variant);
  }

  render() {
    return html`<iz-typography><slot></slot></iz-typography>`;
  }
}
