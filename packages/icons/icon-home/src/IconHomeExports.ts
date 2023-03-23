import { html } from 'lit';
import { IconBase } from '@interzero-icons/icon-base';

// style import
import { style } from './style.css.js';

export class IconHome extends IconBase {
  static styles = style;

  render() {
    const { width, height } = this.getSize();
    const styleCss = this.getInlineStyle();

    return html`
      <svg
        style="${styleCss}"
        xmlns="http://www.w3.org/2000/svg"
        width=${width}
        height=${height}
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M3 7H13V12H9.66667V9.14286H6.33333V12H3V7Z"
          fill="currentColor"
        />
        <path d="M8 3L14.9282 7.5H1.0718L8 3Z" fill="currentColor" />
      </svg>
    `;
  }
}
