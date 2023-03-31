import { html } from 'lit';
import { IconBase } from '@interzero-icons/icon-base';

// style import
import { style } from './style.css.js';

export class IconWarning extends IconBase {
  static style = style;
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
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M8.00002 0L16 16H2.27583e-05L8.00002 0Z"
          fill="currentColor"
        />
      </svg>
    `;
  }
}
