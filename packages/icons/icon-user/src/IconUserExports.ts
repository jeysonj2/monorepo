import { html } from 'lit';
import { IconBase } from '@interzero-icons/icon-base';

// style import
import { style } from './style.css.js';

export class IconUser extends IconBase {
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
          d="M7.99999 9C14.7222 9 13.9753 14 13.9753 14H2.02469C2.02469 14 1.27777 9 7.99999 9Z"
          fill="currentColor"
        />
        <circle cx="8" cy="5" r="3" fill="currentColor" />
      </svg>
    `;
  }
}
