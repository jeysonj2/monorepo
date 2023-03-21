import { html, TemplateResult } from 'lit';
import '../src/option.js';
import { Variant } from '../src/OptionExports.js';

export default {
  title: 'foundations/molecules/Option',
  component: 'iz-option',
  argTypes: {
    variant: { control: 'select', options: ['plain', 'default', 'empty'] },
    checked: { control: 'boolean' },
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
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  value = 'value',
  variant = Variant.default,
  checked = false,
  slot = html`Option`,
}: ArgTypes) => html`
  <iz-option .value=${value} .variant=${variant} .checked=${checked}>
    ${slot}
  </iz-option>
  <iz-option .value=${value} .variant=${variant} .checked=${!checked}>
    ${slot}
  </iz-option>
`;

export const Regular = Template.bind({});
