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
    // style related
    buttonMinWidth: { control: 'text' },
    dropdownMenuHeight: { control: 'text' },
    dropdownMenuColor: { control: 'color' },
    dropdownMenuShadow: { control: 'text' },
    dropdownGap: { control: 'text' },
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
  buttonMinWidth: string;
  dropdownMenuHeight: string;
  dropdownMenuColor: string;
  dropdownMenuShadow: string;
  dropdownGap: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  multiple,
  dontshowselected,
  placement,
  fixedText,
  placeholder,
  variant,
  buttonMinWidth,
  dropdownMenuHeight,
  dropdownMenuColor,
  dropdownMenuShadow,
  dropdownGap,
}: ArgTypes) => html`
  <style>
    iz-dropdown {
      --button-min-width: ${buttonMinWidth};
      --dropdown-menu-height: ${dropdownMenuHeight};
      --dropdown-menu-color: ${dropdownMenuColor};
      --dropdown-menu-shadow: ${dropdownMenuShadow};
      --dropdown-gap: ${dropdownGap};
    }
    div {
      display: flex;
      min-height: 300px;
      justify-content: center;
      align-items: flex-end;
    }
  </style>
  <div>
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
  </div>
`;

export const Regular = Template.bind({});
Regular.args = {
  multiple: false,
  dontshowselected: false,
  placement: 'bottom-right',
  placeholder: 'placeholder',
  variant: 'default',
  // styles
  buttonMinWidth: '100%',
  dropdownMenuHeight: '18rem',
  dropdownMenuColor: 'white',
  dropdownMenuShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
  dropdownGap: '0.2rem',
};
