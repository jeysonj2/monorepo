import { html, TemplateResult } from 'lit';

// web-components
import '@interzero-icons/icon-mail/wc';
import '@interzero/menu-item/wc';

import type { Variant } from '@interzero/button';
import type { Placement } from '@interzero/popover';

import '../src/menu.js';

export default {
  title: 'foundations/organisms/Menu',
  component: 'iz-menu',
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top-left',
        'top-right',
        'top-center',
        'bottom-left',
        'bottom-right',
        'bottom-center',
        'left-top',
        'left-bottom',
        'left-center',
        'right-top',
        'right-bottom',
        'right-center',
      ],
    },
    variant: { control: 'select', options: ['text', 'default', 'icon'] },
    // style related
    menuHeight: { control: 'text' },
    menuColor: { control: 'color' },
    menuShadow: { control: 'text' },
    menuGap: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  placement: Placement;
  variant: Variant;
  slot?: TemplateResult;
  // style related
  menuHeight: string;
  menuColor: string;
  menuShadow: string;
  menuGap: string;
}

const Template: Story<ArgTypes> = ({
  placement,
  variant,
  menuHeight,
  menuColor,
  menuShadow,
  menuGap,
  slot = html`<p slot="text">MENU</p>`,
}: ArgTypes) => html`
  <style>
    iz-menu {
      --menu-height: ${menuHeight};
      --menu-color: ${menuColor};
      --menu-shadow: ${menuShadow};
      --menu-gap: ${menuGap};
    }
    div {
      display: flex;
      min-height: 300px;
      justify-content: center;
      align-items: flex-end;
    }
  </style>
  <div>
    <iz-menu .placement=${placement} .variant=${variant}>
      ${slot}
      <iz-menu-item value="1">Item 1</iz-menu-item>
      <iz-menu-item value="2">Item 2</iz-menu-item>
      <iz-menu-item value="3">Item 3</iz-menu-item>
      <iz-menu-item value="4">Item 4</iz-menu-item>
      <iz-menu-item value="5">Item 5</iz-menu-item>
    </iz-menu>
  </div>
`;

export const Regular = Template.bind({});
Regular.args = {
  placement: 'bottom-right',
  variant: 'default',
  // styles
  menuHeight: '18rem',
  menuColor: 'white',
  menuShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
  menuGap: '0.2rem',
};

export const Icon = Template.bind({});
Icon.args = {
  ...Regular.args,
  slot: html`<iz-icon-mail slot="text"></iz-icon-mail>`,
};
