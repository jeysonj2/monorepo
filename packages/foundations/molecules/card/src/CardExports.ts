import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
import '@interzero-tools/translate/wc';
import '@interzero/typography/wc';

// style import
import { style } from './style.css';

export class Card extends LitElement {
  static styles = style;

  @property({ type: Boolean }) header: boolean = false;

  @property({ type: Boolean }) footer: boolean = false;

  @property() headerTitle? = 'Title';

  render() {
    return html`
      ${this.header
        ? html` <header>
            <iz-typography>
              <iz-translate>${this.headerTitle}</iz-translate>
            </iz-typography>
            <slot name="header"></slot>
          </header>`
        : null}

      <main>
        <slot></slot>
      </main>

      ${this.footer
        ? html`
            <footer>
              <slot name="footer"></slot>
            </footer>
          `
        : null}
    `;
  }
}
