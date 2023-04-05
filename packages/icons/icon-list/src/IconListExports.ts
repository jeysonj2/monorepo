import { html } from 'lit';
import { property } from 'lit/decorators.js';

// web-component
import { IconBase } from '@interzero-icons/icon-base';

// style import
import { style } from './style.css.js';

// types & interfaces
export type Density = 'thin' | 'medium' | 'thick';

export class IconList extends IconBase {
  static styles = [IconBase.style, style];

  @property() density: Density = 'medium';

  render() {
    const { width, height } = this.getSize();
    const styleCss = this.getInlineStyle();

    switch (this.density) {
      case 'thin':
        return html`
          <svg
            style="${styleCss}"
            xmlns="http://www.w3.org/2000/svg"
            width=${width}
            height=${height}
            viewBox="0 0 16 16"
            fill="none"
          >
            <rect x="3" y="4" width="10" height="1" fill="currentColor" />
            <rect x="3" y="11" width="10" height="1" fill="currentColor" />
            <rect x="3" y="9.25" width="10" height="1" fill="currentColor" />
            <rect x="3" y="7.5" width="10" height="1" fill="currentColor" />
            <rect x="3" y="5.75" width="10" height="1" fill="currentColor" />
          </svg>
        `;
      case 'thick':
        return html`
          <svg
            style="${styleCss}"
            xmlns="http://www.w3.org/2000/svg"
            width=${width}
            height=${height}
            viewBox="0 0 16 16"
            fill="none"
          >
            <rect x="3" y="4" width="10" height="2.25" fill="currentColor" />
            <rect x="3" y="9.75" width="10" height="2.25" fill="currentColor" />
            <rect
              x="3"
              y="6.875"
              width="10"
              height="2.25"
              fill="currentColor"
            />
          </svg>
        `;
      default:
        return html`
          <svg
            style="${styleCss}"
            xmlns="http://www.w3.org/2000/svg"
            width=${width}
            height=${height}
            viewBox="0 0 16 16"
            fill="none"
          >
            <rect x="3" y="4" width="10" height="1.5" fill="currentColor" />
            <rect
              x="3"
              y="10.495"
              width="10"
              height="1.5"
              fill="currentColor"
            />
            <rect x="3" y="8.33" width="10" height="1.5" fill="currentColor" />
            <rect x="3" y="6.165" width="10" height="1.5" fill="currentColor" />
          </svg>
        `;
    }
  }
}
