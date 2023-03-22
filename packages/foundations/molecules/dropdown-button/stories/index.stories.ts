import { html, TemplateResult } from 'lit';
import '../src/dropdown-button.js';

import type { Variant } from '@interzero/button';
import type { Direction } from '../src/DropdownButtonExports.js';

export default {
  title: 'foundations/molecules/DropdownButton',
  component: 'iz-dropdown-button',
  argTypes: {
    direction: { control: 'select', options: ['up', 'down'] },
    variant: { control: 'select', options: ['text', 'default'] },
    disabled: { control: 'boolean' },
    open: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  direction: Direction;
  variant: Variant;
  disabled: boolean;
  open: boolean;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  direction = 'down',
  variant = 'default',
  disabled = false,
  open = false,
  slot = html`My Dropdown`,
}: ArgTypes) => html`
  <iz-dropdown-button
    .direction=${direction}
    .variant=${variant}
    .disabled=${disabled}
    .open=${open}
    >${slot}</iz-dropdown-button
  >
`;

export const Regular = Template.bind({});

export const TextVariant = Template.bind({});
TextVariant.args = {
  variant: 'text',
};
