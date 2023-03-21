import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// style import
import { style } from './style.css';

// types & interfaces
export type Variant = 'heading' | 'body' | 'logo' | 'logob' | 'help' | 'label';

export class Typography extends LitElement {
  static styles = style;

  @property() variant: Variant = 'body';

  render() {
    switch (this.variant) {
      case 'heading':
      case 'logo':
        return html`<h1 class="${this.variant}"><slot></slot></h1>`;
      case 'logob':
        return html`<h4 class="logob"><slot></slot></h4>`;
      default:
        return html`<p class=${this.variant}><slot></slot></p>`;
    }
  }
}
