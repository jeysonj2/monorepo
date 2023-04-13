import { html } from 'lit';

import { IconBase } from '@interzero-icons/icon-base';

// style import
import { style } from './style.css.js';

export class IconArrow extends IconBase {
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
        <path xmlns="http://www.w3.org/2000/svg" d="M1 11L7.78788 5L15 11" stroke="currentColor" stroke-width="2"/>
      </svg>
    `;
  }
}
