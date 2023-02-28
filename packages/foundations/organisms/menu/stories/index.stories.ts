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
}

const Template: Story<ArgTypes> = ({
  placement = 'bottom-right',
  variant = 'default',
  slot = html`<p slot="text">MENU</p>`,
}: ArgTypes) => html`
  <iz-menu .placement=${placement} .variant=${variant}>
    ${slot}
    <iz-menu-item value="1">Item 1</iz-menu-item>
    <iz-menu-item value="2">Item 2</iz-menu-item>
    <iz-menu-item value="3">Item 3</iz-menu-item>
    <iz-menu-item value="4">Item 4</iz-menu-item>
    <iz-menu-item value="5">Item 5</iz-menu-item>
  </iz-menu>
`;

export const Regular = Template.bind({});

export const Icon = Template.bind({});
Icon.args = {
  slot: html`<iz-icon-mail slot="text"></iz-icon-mail>`,
};
