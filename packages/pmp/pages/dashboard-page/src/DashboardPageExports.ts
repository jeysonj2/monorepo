import { html, LitElement } from 'lit';

// web-components
import '@interzero-pmp/page-template';
import '@interzero/typography/wc';

// tools
import '@interzero-tools/translate/wc';

// classes and types
import type { ChangeEvent } from '@interzero-pmp/page-template';

// style import
import { style } from './style.css.js';

export class DashboardPage extends LitElement {
  static styles = style;

  private handleHeaderChange = (event: CustomEvent<ChangeEvent>) => {
    this.dispatchEvent(
      new CustomEvent<ChangeEvent>('header-change', { detail: event.detail })
    );
  };

  render() {
    return html`
      <iz-pmp-page-template @header-change=${this.handleHeaderChange}>
        <iz-typography><iz-translate>Dashboard</iz-translate></iz-typography>
      </iz-pmp-page-template>
    `;
  }
}
