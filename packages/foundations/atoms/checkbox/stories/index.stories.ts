import { html, TemplateResult } from 'lit';
import '../src/checkbox.js';
import { Variant } from '../src/CheckboxExports.js';

export default {
  title: 'foundations/atoms/Checkbox',
  component: 'iz-checkbox',
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: ['plain', 'default'] },
    checked: { control: 'boolean' },
    locked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  label?: string;
  variant?: Variant;
  checked?: boolean;
  disabled?: boolean;
  locked?: boolean;
}

const Template: Story<ArgTypes> = ({
  label = 'Checkbox',
  variant = 'default',
  checked = false,
  locked = false,
  disabled = false,
}: ArgTypes) => html`
  <iz-checkbox
    .disabled=${disabled}
    .locked=${locked}
    .checked=${!checked}
    .variant=${variant}
    .label=${label}
  >
  </iz-checkbox>

  <iz-checkbox
    .disabled=${disabled}
    .locked=${locked}
    .checked=${checked}
    .variant=${variant}
    .label=${label}
  >
  </iz-checkbox>
`;

export const Regular = Template.bind({});
