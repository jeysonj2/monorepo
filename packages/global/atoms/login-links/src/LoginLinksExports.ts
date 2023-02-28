import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
import '@interzero/link/wc';
import '@interzero/typography/wc';
import '@interzero-tools/translate/wc';

// style import
import { style } from './style.css.js';

export class LoginLinks extends LitElement {
  static styles = style;

  @property() contactLink: string = 'https://www.interzero.de/kontakt/';

  @property() interzeroLink: string = 'https://www.interzero.de/';

  render() {
    return html`
      <iz-link variant="text" href="${this.interzeroLink}">
        <iz-translate>INTERZERO</iz-translate>
      </iz-link>
      <iz-link variant="text" href="${this.contactLink}">
        <iz-translate>KONTAKT</iz-translate>
      </iz-link>
      <iz-typography>
        <iz-translate
          >© 2022 - Interzero Circular Solutions Germany Gmbh</iz-translate
        >
      </iz-typography>
    `;
  }
}
