import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// style import
import { style } from './style.css.js';

// types & interfaces
export type Variant = 'text' | 'link';

export class Link extends LitElement {
  static styles = style;

  @property() href!: string;

  @property() variant: Variant = 'link';

  render() {
    return html`
      <a href="#" .href=${this.href} class=${this.variant}><slot></slot></a>
    `;
  }
}
