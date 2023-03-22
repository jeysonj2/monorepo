import { html } from 'lit';

// web-component
import { IconBase } from '@interzero-icons/icon-base';

// style import
import { style } from './style.css';

export class IconClose extends IconBase {
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
          x="2.28572"
          y="13.5994"
          width="16"
          height="1.14286"
          transform="rotate(-45 2.28572 13.5994)"
          fill="currentColor"
        />
        <rect
          x="3.09384"
          y="2.28571"
          width="16"
          height="1.14286"
          transform="rotate(45 3.09384 2.28571)"
          fill="currentColor"
        />
      </svg>
    `;
  }
}
