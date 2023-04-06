import { html, TemplateResult } from 'lit';
import '../src/flow-option.js';
import { Variant } from '../src/FlowOptionExports.js';

export default {
  title: 'pmp/atoms/FlowOption',
  component: 'iz-pmp-flow-option',
  argTypes: {
    variant: { control: 'select', options: ['default', 'edit', 'add', 'save'] },
    id: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  variant?: Variant;
  id?: string;
  value?: string;
  checked?: boolean;
}

const Template: Story<ArgTypes> = ({
  variant = "default",
  id = "1",
  value = "Value",
  checked = false,
}: ArgTypes) => html`
  <style>
    iz-pmp-flow-option {
      width: 100px;
    }
  </style>
  <iz-pmp-flow-option
    variant=${variant}
    id=${id}
    checked=${checked}
    .value=${value}
  >
  </iz-pmp-flow-option>
`;

const AllTemplate: Story<ArgTypes> = () => html`
  <style>
    iz-pmp-flow-option {
      width: 100px;
    }
  </style>
  <fieldset>
    <legend>Default</legend>
    <iz-pmp-flow-option value="value"></iz-pmp-flow-option>
  </fieldset>

  <fieldset>
    <legend>Edit</legend>
    <iz-pmp-flow-option value="value" variant="edit"></iz-pmp-flow-option>
  </fieldset>

  <fieldset>
    <legend>Add</legend>
    <iz-pmp-flow-option value="value" variant="add"></iz-pmp-flow-option>
  </fieldset>

  <fieldset>
    <legend>Save</legend>
    <iz-pmp-flow-option value="value" variant="save"></iz-pmp-flow-option>
  </fieldset>
`

export const Regular = Template.bind({});

export const All = AllTemplate.bind({});
