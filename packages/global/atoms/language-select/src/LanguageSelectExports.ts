import { html, LitElement, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

// components
import '@interzero/menu/wc';
import '@interzero/menu-item/wc';
import '@interzero-tools/translate/wc';

// classes & objects
import { TRANSLATION_ADDED } from '@interzero-tools/translate';
import type { Translation } from '@interzero-tools/translate';
import type { ChangeEvent } from '@interzero/menu-item';
import type { Placement } from '@interzero/popover';

// style import
import { style } from './style.css';

export class LanguageSelect extends LitElement {
  static styles = style;

  @property() placement: Placement = 'bottom-left';

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener(TRANSLATION_ADDED, this.handleTranslationAdded);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener(TRANSLATION_ADDED, this.handleTranslationAdded);
  }

  private handleChange(_event: Event) {
    const event = _event as CustomEvent<ChangeEvent>;
    if (event.detail.value) {
      window.izTranslation.change(event.detail.value);
      this.requestUpdate();
    }
  }

  private handleTranslationAdded = () => {
    this.requestUpdate();
  };

  render() {
    const options: TemplateResult<1>[] = [];
    window.izTranslation.map.forEach(set => {
      let flag: TemplateResult<1> | null = null;
      if (set.flag) flag = html`<span>${set.flag}</span>`;

      options.push(html` <iz-menu-item variant="plain" value=${set.id}>
        <div class="menu-item-flex">
          ${flag}
          <iz-translate>${set.name}</iz-translate>
        </div>
      </iz-menu-item>`);
    });

    const fixedText = window.izTranslation.current
      ? window.izTranslation.current.flag
      : undefined;

    return html`
      <iz-menu
        placement=${this.placement}
        variant="text"
        value=${window.izTranslation.current?.id}
        @change=${this.handleChange}
      >
        <span slot="text">${fixedText}</span>
        ${options}
      </iz-menu>
    `;
  }
}

// types & interfaces

// declares
declare global {
  interface Window {
    izTranslation: Translation;
  }
}
