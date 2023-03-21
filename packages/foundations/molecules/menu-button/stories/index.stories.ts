import { html, TemplateResult } from 'lit';

// web-components
import '@interzero-icons/icon-mail/wc';

import '../src/menu-button.js';
import { Variants } from '@interzero/button';
import { Direction } from '../src/MenuButtonExports.js';

export default {
  title: 'foundations/molecules/MenuButton',
  component: 'iz-menu-button',
  argTypes: {
    direction: { control: 'select', options: ['up', 'down'] },
    variant: { control: 'select', options: ['text', 'default'] },
    open: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  variant: Variants;
  direction: Direction;
  open?: boolean;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  variant = Variants.default,
  direction = Direction.down,
  open = false,
  slot = html`Menu Button`,
}: ArgTypes) => html`
  <iz-menu-button .direction=${direction} .variant=${variant} .open=${open}>
    ${slot}
  </iz-menu-button>
`;

export const Regular = Template.bind({});

export const TextVariant = Template.bind({});
TextVariant.args = {
  variant: Variants.text,
};

export const Icon = Template.bind({});
Icon.args = {
  variant: Variants.text,
  slot: html`<iz-icon-mail></iz-icon-mail>`,
};
