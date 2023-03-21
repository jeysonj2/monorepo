import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// web-components
import '@interzero/popover/wc';
import '@interzero/menu-button/wc';

// classes
import type { Placement } from '@interzero/popover';
import { Variants } from '@interzero/button';
import { MenuItem } from '@interzero/menu-item';
import type { ChangeEvent } from '@interzero/menu-item';
import { MenuButton } from '@interzero/menu-button';

// style import
import { style } from './style.css';

export class Menu extends LitElement {
  static styles = style;

  @property() placement: Placement = 'bottom-right';

  @property() variant: Variants = Variants.default;

  private handlePopoverClose = () => {
    const button = this.shadowRoot?.querySelector('iz-menu-button');
    if (button instanceof MenuButton) {
      button.open = false;
    }
  };

  private handleSlotChange = (event: Event) => {
    const slot = event.currentTarget as HTMLSlotElement;
    slot.assignedNodes().forEach(node => {
      if (node.nodeName.toLowerCase() === 'iz-menu-item') {
        const option = node as MenuItem;
        if (!option.hasAttribute('menu-item-registered')) {
          option.setAttribute('menu-item-registered', 'true');
          option.addEventListener('change', this.handleItemToggle);
        }
      }
    });
  };

  private handleItemToggle = (_event: Event) => {
    const event = _event as CustomEvent<ChangeEvent>;
    this.dispatchEvent(
      new CustomEvent<ChangeEvent>('change', { detail: event.detail })
    );
  };

  render() {
    return html`
      <iz-menu-button
        id="target"
        variant=${this.variant}
        direction=${this.placement.startsWith('top') ? 'up' : 'down'}
      >
        <slot name="text"></slot>
      </iz-menu-button>
      <iz-popover
        @popover-close=${this.handlePopoverClose}
        hideonoutsideclick
        revealBy="click"
        target="#target"
        placement=${this.placement}
      >
        <div class="card">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      </iz-popover>
    `;
  }
}
