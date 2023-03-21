import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// style import
import { style } from './style.css';

// types & interfaces
export type Variant = 'success' | 'error' | 'info' | 'warning';

export class Badge extends LitElement {
  static styles = style;

  @property() variant?: Variant;

  render() {
    return html` <iz-typography><slot></slot></iz-typography> `;
  }
}
