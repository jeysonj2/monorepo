import { html, LitElement } from 'lit';

// web-components
import '@interzero-global/header/wc';
import '@interzero/menu/wc';
import '@interzero/typography/wc';
import '@interzero/menu-item/wc';

// tools
import '@interzero-tools/translate/wc';

// classes & types
import type { ChangeEvent } from '@interzero-global/header';

// style import
import { style } from './style.css.js';

export type { ChangeEvent } from '@interzero-global/header';

// type Role = 1|2;
// interface UserModel {
//   role: Role;
//   email: string;
// }
export class PageTemplate extends LitElement {
  static styles = style;

  // @property({type:Object}) userData!: UserModel; 

  private handleChange = (event: CustomEvent<ChangeEvent>) => {
    this.dispatchEvent(
      new CustomEvent<ChangeEvent>('header-change', {
        detail: event.detail,
        bubbles: true,
      })
    );
  };

  render() {
    return html`
      <iz-global-header @change=${this.handleChange}>
        <iz-menu variant="text">
          <iz-typography slot="text"
            ><iz-translate>Menu 1</iz-translate></iz-typography
          >
          <iz-menu-item value="A"
            ><iz-translate>Item A</iz-translate></iz-menu-item
          >
          <iz-menu-item value="B"
            ><iz-translate>Item B</iz-translate></iz-menu-item
          >
          <iz-menu-item value="C"
            ><iz-translate>Item C</iz-translate></iz-menu-item
          >
          <iz-menu-item value="D"
            ><iz-translate>Item D</iz-translate></iz-menu-item
          >
        </iz-menu>
        <iz-menu variant="text">
          <iz-typography slot="text"
            ><iz-translate>Menu 2</iz-translate></iz-typography
          >
          <iz-menu-item value="A"
            ><iz-translate>Item A</iz-translate></iz-menu-item
          >
          <iz-menu-item value="B"
            ><iz-translate>Item B</iz-translate></iz-menu-item
          >
          <iz-menu-item value="C"
            ><iz-translate>Item C</iz-translate></iz-menu-item
          >
          <iz-menu-item value="D"
            ><iz-translate>Item D</iz-translate></iz-menu-item
          >
        </iz-menu>
        <iz-menu variant="text">
          <iz-typography slot="text"
            ><iz-translate>Menu 3</iz-translate></iz-typography
          >
          <iz-menu-item value="A"
            ><iz-translate>Item A</iz-translate></iz-menu-item
          >
          <iz-menu-item value="B"
            ><iz-translate>Item B</iz-translate></iz-menu-item
          >
          <iz-menu-item value="C"
            ><iz-translate>Item C</iz-translate></iz-menu-item
          >
          <iz-menu-item value="D"
            ><iz-translate>Item D</iz-translate></iz-menu-item
          >
        </iz-menu>
      </iz-global-header>
      <main>
        <slot></slot>
      </main>
    `;
  }
}
