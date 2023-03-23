import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import '@interzero/typography/wc';

// style import
import { style } from './style.css.js';

// types & interfaces
export type Size = 'small' | 'medium' | 'large';

export class Logo extends LitElement {
  static styles = style;

  @property() size: Size = 'medium';

  render() {
    return html`
      <iz-typography variant="logo" class="inter">INTER</iz-typography>
      <iz-typography variant="logo" class="zero">ZERO</iz-typography>
      <iz-typography variant="logob" class="slogan"
        >zero waste solutions</iz-typography
      >
    `;
  }
}
