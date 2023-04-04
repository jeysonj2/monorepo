import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
import '@interzero/button/wc';
import '@interzero-tools/translate/wc';

// classes & types
import type { Size } from '@interzero/button';

// style import
import { style } from './style.css.js';

// types & interfaces
export type ActiveState = 'left' | 'right';
export class ButtonSwitch extends LitElement {
  static styles = style;

  @property() left!: string;

  @property() right!: string;

  @property() size: Size = 'medium';

  @property() active: ActiveState = 'left';

  @property({ type: Boolean }) noInternalClick: boolean = false;

  // event handlers
  private handleClick(state: ActiveState) {
    return () => {
      if (this.noInternalClick) return;

      this.active = state;
    };
  }

  render() {
    return html`
      <iz-button
        size=${this.size}
        @click=${this.handleClick('left')}
        class=${this.active === 'left' ? 'active' : 'inactive'}
      >
        <iz-translate>${this.left}</iz-translate>
      </iz-button>
      <iz-button
        size=${this.size}
        @click=${this.handleClick('right')}
        class=${this.active === 'right' ? 'active' : 'inactive'}
      >
        <iz-translate>${this.right}</iz-translate>
      </iz-button>
    `;
  }
}
