import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
// atoms
import '@interzero/typography/wc';
// molecules
import '@interzero/menu-item/wc';
// organisms
import '@interzero/menu/wc';
// global
// atoms
import '@interzero-global/footer/wc';
// molecules
import '@interzero-global/header/wc';

// tools
import '@interzero-tools/translate/wc';

// classes & types
import type { ChangeEvent as MenuChangeEvent } from '@interzero/menu-item';
import type {
  ChangeEvent as HeaderChangeEvent,
  ChangeType as HeaderChangeType,
} from '@interzero-global/header';

// style import
import { style } from './style.css.js';

type Role = 'user' | 'admin';
type MenuType = 'administration';
export type ChangeType = HeaderChangeType | MenuType;
export type ChangeEvent = {
  type: ChangeType;
  value: string;
};
export interface UserModel {
  role: Role;
}
export class PageTemplate extends LitElement {
  static styles = style;

  @property({ type: Object }) userData?: UserModel;

  private handleHeaderChange = (event: CustomEvent<HeaderChangeEvent>) => {
    this.dispatchEvent(
      new CustomEvent<ChangeEvent>('change', {
        detail: event.detail,
        bubbles: true,
      })
    );
  };

  private handleMenuChange(type: MenuType) {
    return (event: CustomEvent<MenuChangeEvent>) => {
      this.dispatchEvent(
        new CustomEvent<ChangeEvent>('change', {
          detail: {
            type,
            value: event.detail.value,
          },
          bubbles: true,
        })
      );
    };
  }

  render() {
    return html`
      <iz-global-header @change=${this.handleHeaderChange}>
        ${this.userData?.role === 'admin'
          ? html` <iz-menu
              variant="text"
              @change=${this.handleMenuChange('administration')}
            >
              <iz-typography slot="text">
                <iz-translate>Administration</iz-translate>
              </iz-typography>
              <iz-menu-item value="users">
                <iz-translate>Users</iz-translate>
              </iz-menu-item>
              <iz-menu-item value="list-of-price-list">
                <iz-translate>List of Price List</iz-translate>
              </iz-menu-item>
              <iz-menu-item value="price-flow">
                <iz-translate>Price Flow</iz-translate>
              </iz-menu-item>
            </iz-menu>`
          : null}
      </iz-global-header>
      <main>
        <slot></slot>
      </main>
      <iz-global-footer></iz-global-footer>
    `;
  }
}
