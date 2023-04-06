import { html, TemplateResult } from 'lit';
import '../src/menu-item.js';

export default {
  title: 'foundations/molecules/MenuItem',
  component: 'iz-menu-item',
  argTypes: {
    buttonHeightLarge: { control: 'text' },
    buttonMinWidth: { control: 'text' },
    menuItemPadding: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  value: string;
  buttonHeightLarge: string;
  buttonMinWidth: string;
  menuItemPadding: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  value = 'value',
  buttonHeightLarge,
  buttonMinWidth,
  menuItemPadding,
  slot = html`Menu Item`,
}: ArgTypes) => html`
  <style>
    iz-menu-item {
      --button-height-large: ${buttonHeightLarge};
      --menu-button-min-width: ${buttonMinWidth};
      --menu-item-padding: ${menuItemPadding};
    }
  </style>
  <iz-menu-item .value=${value}>${slot}</iz-menu-item>
`;

export const Regular = Template.bind({});
Regular.args = {
  buttonHeightLarge: '40px',
  buttonMinWidth: '3rem',
  menuItemPadding: '0 0.5rem',
};
