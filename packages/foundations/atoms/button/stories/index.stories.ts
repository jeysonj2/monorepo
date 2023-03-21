import { html, TemplateResult } from 'lit';

// web components
import '@interzero-icons/icon-mail/wc';

import { Types, Variants } from '../src/ButtonExports.js';
import '../src/button.js';

export default {
  title: 'foundations/atoms/Button',
  component: 'iz-button',
  argTypes: {
    type: { control: 'select', options: ['button', 'reset', 'submit'] },
    variant: { control: 'select', options: ['text', 'default', 'icon'] },
    disabled: { control: 'boolean' },
  },
};

interface ArgTypes {
  type?: Types;
  variant?: Variants;
  disabled?: boolean;
  slot?: TemplateResult;
}

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<ArgTypes> = ({
  type = Types.button,
  disabled = false,
  variant = Variants.default,
  slot = html`Button`,
}: ArgTypes) => html`
  <iz-button .type=${type} .disabled=${disabled} .variant=${variant}>
    ${slot}
  </iz-button>
`;

export const Regular = Template.bind({});

export const TextVariant = Template.bind({});
TextVariant.args = {
  variant: Variants.text,
};

export const IconVariant = Template.bind({});
IconVariant.args = {
  variant: Variants.icon,
  slot: html`<iz-icon-mail></iz-icon-mail>`,
};
