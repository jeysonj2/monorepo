import { html } from 'lit';

import { IconBase } from '@interzero-icons/icon-base';

// style import
import { style } from './style.css';

export class IconCaret extends IconBase {
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
        <!-- <path d="M7 10L4.40192 5.5L9.59808 5.5L7 10Z" fill="currentColor"/> -->
        <path
          d="M8.00002 11.4286L5.03079 6.28572L10.9692 6.28572L8.00002 11.4286Z"
          fill="currentColor"
        />
      </svg>
    `;
  }
}
