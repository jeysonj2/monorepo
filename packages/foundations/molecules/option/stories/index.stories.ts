import { html, TemplateResult } from 'lit';
import '../src/option.js';
import type { Variant } from '../src/OptionExports';

export default {
  title: 'foundations/molecules/Option',
  component: 'iz-option',
  argTypes: {
    variant: { control: 'select', options: ['plain', 'default', 'empty'] },
    checked: { control: 'boolean' },
    // style related
    buttonPadding: { control: 'text' },
    optionPadding: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  value: string;
  variant: Variant;
  checked: boolean;
  buttonPadding: string;
  optionPadding: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  value = 'value',
  variant,
  checked,
  buttonPadding,
  optionPadding,
  slot = html`Option`,
}: ArgTypes) => html`
  <style>
    iz-option {
      --button-padding: ${buttonPadding};
      --option-padding: ${optionPadding};
    }
  </style>
  <iz-option .value=${value} .variant=${variant} .checked=${checked}>
    ${slot}
  </iz-option>
  <iz-option .value=${value} .variant=${variant} .checked=${!checked}>
    ${slot}
  </iz-option>
`;

export const Regular = Template.bind({});
Regular.args = {
  variant: 'default',
  checked: false,
  buttonPadding: '0',
  optionPadding: '0 0.5rem',
};
