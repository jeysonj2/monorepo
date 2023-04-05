import { html, LitElement } from 'lit';

// web components
import '@interzero/button/wc';
import '@interzero-global/logo/wc';
import '@interzero-global/user-menu/wc';
import '@interzero-icons/icon-home/wc';
import '@interzero-global/language-select/wc';

// classes & types
import type { ChangeEvent as MIChangeEvent } from '@interzero/menu-item';
import '@interzero-tools/translate';

// style import
import { style } from './style.css.js';

// types & interfaces
export type ChangeType = 'home-button' | 'user-menu';
export interface ChangeEvent {
  type: ChangeType;
  value: string;
}

export class Header extends LitElement {
  static styles = style;

  constructor() {
    super();

    if (window.izTranslation.map.size === 0) {
      // we add a manual translation: english
      window.izTranslation.load({
        id: 'en',
        name: 'english',
        flag: '🇬🇧',
        translations: {
          english: 'English',
        },
      });
    }
  }

  private handleHomeClick() {
    this.dispatchEvent(
      new CustomEvent<ChangeEvent>('change', {
        detail: {
          type: 'home-button',
          value: 'home',
        },
      })
    );
  }

  private handleUserMenuChange(_event: Event) {
    const event = _event as CustomEvent<MIChangeEvent>;
    this.dispatchEvent(
      new CustomEvent<ChangeEvent>('change', {
        detail: {
          type: 'user-menu',
          value: event.detail.value,
        },
      })
    );
  }

  render() {
    return html`
      <iz-global-logo size="small"></iz-global-logo>
      <iz-button variant="circle" @click=${this.handleHomeClick}>
        <iz-icon-home></iz-icon-home>
      </iz-button>
      <div class="menus">
        <slot></slot>
      </div>
      <div class="right">
        <iz-global-language-select></iz-global-language-select>
        <iz-global-user-menu
          @change=${this.handleUserMenuChange}
        ></iz-global-user-menu>
      </div>
    `;
  }
}
