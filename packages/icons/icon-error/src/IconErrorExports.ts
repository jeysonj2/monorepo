import { html } from 'lit';
import { IconBase } from '@interzero-icons/icon-base';

// style import
import { style } from './style.css.js';

export class IconError extends IconBase {
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
        <circle cx="8" cy="8" r="7.5" stroke="currentColor" />
        <path
          d="M8.58008 3.27273L8.49485 9.54545H7.50621L7.42099 3.27273H8.58008ZM8.00053 12.0682C7.79031 12.0682 7.60991 11.9929 7.45934 11.8423C7.30877 11.6918 7.23349 11.5114 7.23349 11.3011C7.23349 11.0909 7.30877 10.9105 7.45934 10.7599C7.60991 10.6094 7.79031 10.5341 8.00053 10.5341C8.21076 10.5341 8.39116 10.6094 8.54173 10.7599C8.69229 10.9105 8.76758 11.0909 8.76758 11.3011C8.76758 11.4403 8.73207 11.5682 8.66104 11.6847C8.59286 11.8011 8.50053 11.8949 8.38406 11.9659C8.27042 12.0341 8.14258 12.0682 8.00053 12.0682Z"
          fill="currentColor"
        />
      </svg>
    `;
  }
}
