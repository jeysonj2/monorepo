import { html, TemplateResult } from 'lit';

// web-components
import '@interzero/option/wc';
import type { Variant } from '@interzero/button';
import type { Placement } from '@interzero/popover';

import '../src/dropdown.js';

export default {
  title: 'foundations/organisms/Dropdown',
  component: 'iz-dropdown',
  argTypes: {
    multiple: { control: 'boolean' },
    dontshowselected: { control: 'boolean' },
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
    fixedText: { control: 'text' },
    placeholder: { control: 'text' },
    variant: { control: 'select', options: ['text', 'default', 'icon'] },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  multiple: boolean;
  dontshowselected: boolean;
  placement: Placement;
  fixedText?: string;
  placeholder?: string;
  variant: Variant;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  multiple = false,
  dontshowselected = false,
  placement = 'bottom-right',
  fixedText,
  placeholder = 'placeholder',
  variant = 'default',
}: ArgTypes) => html`
  <iz-dropdown
    .multiple=${multiple}
    .dontshowselected=${dontshowselected}
    .placement=${placement}
    .fixedText=${fixedText}
    .placeholder=${placeholder}
    .variant=${variant}
  >
    <iz-option value="1">Item 1</iz-option>
    <iz-option value="2">Item 2</iz-option>
    <iz-option value="3">Item 3</iz-option>
    <iz-option value="4">Item 4</iz-option>
    <iz-option value="5">Item 5</iz-option>
  </iz-dropdown>
`;

export const Regular = Template.bind({});
