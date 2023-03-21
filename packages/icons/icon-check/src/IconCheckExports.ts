import { html } from 'lit';
import { IconBase } from '@interzero-icons/icon-base';

// style import
import { style } from './style.css';

export class IconCheck extends IconBase {
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
        <path d="M2.5 7.5L6 11L13.5 3.5" stroke="currentColor" />
      </svg>
    `;
  }
}
