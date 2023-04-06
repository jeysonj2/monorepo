import { html, TemplateResult } from 'lit';
import '../src/dropdown-button.js';

import type { Variant } from '@interzero/button';
import type { Direction } from '../src/DropdownButtonExports.js';

export default {
  title: 'foundations/molecules/DropdownButton',
  component: 'iz-dropdown-button',
  argTypes: {
    direction: { control: 'select', options: ['up', 'down'] },
    variant: { control: 'select', options: ['text', 'default', 'input'] },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    inputvalue: { control: 'text' },
    open: { control: 'boolean' },
    slot: { control: 'text' },
    // style related
    minWidth: { control: 'text' },
    padding: { control: 'text' },
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
  placeholder?: string;
  inputvalue?: string;
  slot?: string;
  minWidth: string;
  padding: string;
}

const Template: Story<ArgTypes> = ({
  direction,
  variant,
  disabled,
  open,
  placeholder,
  inputvalue,
  slot,
  minWidth,
  padding,
}: ArgTypes) => html`
  <style>
    iz-dropdown-button {
      --dropdown-button-min-width: ${minWidth};
      --dropdown-button-padding: ${padding};
    }
  </style>
  <iz-dropdown-button
    .direction=${direction}
    .variant=${variant}
    .disabled=${disabled}
    .open=${open}
    .open=${open}
    .open=${open}
    .placeholder=${placeholder}
    .inputvalue=${inputvalue}
  >
    ${slot}
  </iz-dropdown-button>
`;

const AllTemplate: Story<ArgTypes> = ({ minWidth, padding }: ArgTypes) => html`
  <style>
    iz-dropdown-button {
      --dropdown-button-min-width: ${minWidth};
      --dropdown-button-padding: ${padding};
    }
  </style>
  <fieldset>
    <legend>Regular</legend>
    <iz-dropdown-button>Dropdown Button</iz-dropdown-button>
  </fieldset>

  <fieldset>
    <legend>Text Variant</legend>
    <iz-dropdown-button variant="text">Text Dropdown Button</iz-dropdown-button>
  </fieldset>

  <fieldset>
    <legend>Input Variant</legend>
    <iz-dropdown-button variant="input"> Search </iz-dropdown-button>
  </fieldset>
`;

export const Regular = Template.bind({});
Regular.args = {
  direction: 'down',
  variant: 'default',
  disabled: false,
  open: false,
  placeholder: 'placeholder',
  inputvalue: undefined,
  slot: 'text',
  minWidth: '170px',
  padding: '0 0.2rem',
};

export const All = AllTemplate.bind({});
All.args = {
  minWidth: '170px',
  padding: '0 0.2rem',
};
