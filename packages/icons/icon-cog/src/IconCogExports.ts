import { html } from 'lit';
import { IconBase } from '@interzero-icons/icon-base';

// style import
import { style } from './style.css';

export class IconCog extends IconBase {
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.22222 0H9.77778V2.03545C10.1916 2.1586 10.5874 2.32365 10.9602 2.52567L12.3998 1.08607L14.9139 3.60022L13.4743 5.03982C13.6763 5.41263 13.8414 5.80841 13.9646 6.22222H16V9.77778H13.9646C13.8414 10.1916 13.6763 10.5874 13.4743 10.9602L14.9139 12.3998L12.3998 14.9139L10.9602 13.4743C10.5874 13.6764 10.1916 13.8414 9.77778 13.9646V16H6.22222V13.9646C5.80841 13.8414 5.41264 13.6764 5.03983 13.4743L3.60023 14.9139L1.08608 12.3998L2.52567 10.9602C2.32365 10.5874 2.15861 10.1916 2.03545 9.77778H0V6.22222H2.03545C2.1586 5.80841 2.32365 5.41263 2.52567 5.03982L1.08608 3.60023L3.60024 1.08607L5.03983 2.52567C5.41264 2.32365 5.80841 2.1586 6.22222 2.03545V0ZM8 10.6667C9.47276 10.6667 10.6667 9.47276 10.6667 8C10.6667 6.52724 9.47276 5.33333 8 5.33333C6.52724 5.33333 5.33333 6.52724 5.33333 8C5.33333 9.47276 6.52724 10.6667 8 10.6667Z"
          fill="currentColor"
        />
      </svg>
    `;
  }
}
