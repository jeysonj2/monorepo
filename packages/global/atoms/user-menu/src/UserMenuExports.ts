import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// components
import '@interzero/menu/wc';
import '@interzero/menu-item/wc';
import '@interzero-icons/icon-user/wc';
import '@interzero-tools/translate/wc';

// classes
import type { ChangeEvent } from '@interzero/menu-item';
import type { Placement } from '@interzero/popover';

// style import
import { style } from './style.css';

export class UserMenu extends LitElement {
  static styles = style;

  @property() placement: Placement = 'bottom-left';

  private handleChange(_event: Event) {
    const event = _event as CustomEvent<ChangeEvent>;
    this.dispatchEvent(
      new CustomEvent<ChangeEvent>('change', { detail: event.detail })
    );
  }

  render() {
    return html`
      <iz-menu
        placement=${this.placement}
        variant="text"
        @change=${this.handleChange}
      >
        <iz-icon-user slot="text"></iz-icon-user>
        <iz-menu-item variant="empty" value="logout">
          <iz-translate>Logout</iz-translate>
        </iz-menu-item>
        <iz-menu-item variant="empty" value="user-profile">
          <iz-translate>User Profile</iz-translate>
        </iz-menu-item>
      </iz-menu>
    `;
  }
}
