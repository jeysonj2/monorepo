import { html } from 'lit';
import { IconBase } from '@interzero-icons/icon-base';

// style import
import { style } from './style.css';

export class IconMail extends IconBase {
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
        <rect
          y="1.14286"
          width="16"
          height="13.7143"
          rx="1"
          fill="currentColor"
        />
        <path
          d="M13.7143 3.42857L7.99999 6.85715L2.28571 3.42857"
          class="inverted"
        />
      </svg>
    `;
  }
}
