import { html } from 'lit';
import { IconBase } from '@interzero-icons/icon-base';

// style import
import { style } from './style.css.js';

export class IconLock extends IconBase {
  static styles = [IconBase.style, style];

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
        <rect
          x="3.4"
          y="4.4"
          width="9.2"
          height="9.2"
          stroke="currentColor"
          stroke-width="0.8"
        />
        <path
          d="M11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4"
          stroke="currentColor"
          stroke-width="0.8"
        />
        <circle cx="8" cy="9" r="2" fill="currentColor" />
      </svg>
    `;
  }
}
