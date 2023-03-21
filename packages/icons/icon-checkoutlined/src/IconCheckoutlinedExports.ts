import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { IconBase } from '@interzero-icons/icon-base';

// style import
import { style } from './style.css';

export class IconCheckoutlined extends IconBase {
  static styles = style;

  @property({
    type: Boolean,
    converter: value =>
      !!['true', true, ''].includes((value || '').toLowerCase()),
  })
  checked?: boolean;

  render() {
    const { width, height } = this.getSize();
    const styleCss = this.getInlineStyle();

    if (this.checked === false) {
      return html`
        <svg
          style="${styleCss}"
          xmlns="http://www.w3.org/2000/svg"
          width=${width}
          height=${height}
          viewBox="0 0 16 16"
          fill="none"
        >
          <rect x="0.5" y="0.5" width="15" height="15" stroke="currentColor" />
        </svg>
      `;
    }

    return html`
      <svg
        style="${styleCss}"
        xmlns="http://www.w3.org/2000/svg"
        width=${width}
        height=${height}
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M2.5 7.5L6 11L13.5 3.5" stroke="currentColor" />
        <rect x="0.5" y="0.5" width="15" height="15" stroke="currentColor" />
      </svg>
    `;
  }
}
