import { html, LitElement } from 'lit';

// web-components
import '@interzero/typography/wc';
import '@interzero-tools/translate/wc';

// style import
import { style } from './style.css.js';

export class Footer extends LitElement {
  static styles = style;

  render() {
    return html`
      <iz-typography>
        <iz-translate
          >© 2022 - Interzero Circular Solutions Germany GmbH</iz-translate
        >
      </iz-typography>
    `;
  }
}
