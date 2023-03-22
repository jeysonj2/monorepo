import { html, TemplateResult } from 'lit';

// web components
import '@interzero-icons/icon-mail/wc';

import type { Types, Variant } from '../src/ButtonExports.js';
import '../src/button.js';

export default {
  title: 'foundations/atoms/Button',
  component: 'iz-button',
  argTypes: {
    type: { control: 'select', options: ['button', 'reset', 'submit'] },
    variant: {
      control: 'select',
      options: ['text', 'default', 'square', 'circle'],
    },
    disabled: { control: 'boolean' },
  },
};

interface ArgTypes {
  type?: Types;
  variant?: Variant;
  disabled?: boolean;
  slot?: TemplateResult;
}

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<ArgTypes> = ({
  type = 'button',
  disabled = false,
  variant = 'default',
  slot = html`Button`,
}: ArgTypes) => html`
  <iz-button .type=${type} .disabled=${disabled} .variant=${variant}>
    ${slot}
  </iz-button>
`;

export const Regular = Template.bind({});

export const TextVariant = Template.bind({});
TextVariant.args = {
  variant: 'text',
};

export const CircleVariant = Template.bind({});
CircleVariant.args = {
  variant: 'circle',
  slot: html`<iz-icon-mail></iz-icon-mail>`,
};

export const SquareVariant = Template.bind({});
CircleVariant.args = {
  variant: 'square',
  slot: html`<iz-icon-mail></iz-icon-mail>`,
};
