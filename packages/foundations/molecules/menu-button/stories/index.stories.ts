import { html, TemplateResult } from 'lit';

// web-components
import '@interzero-icons/icon-mail/wc';

import '../src/menu-button.js';
import type { Variant } from '@interzero/button';
import type { Direction } from '../src/MenuButtonExports.js';

export default {
  title: 'foundations/molecules/MenuButton',
  component: 'iz-menu-button',
  argTypes: {
    direction: { control: 'select', options: ['up', 'down'] },
    variant: { control: 'select', options: ['text', 'default'] },
    open: { control: 'boolean' },
    buttonHeightLarge: { control: 'text' },
    buttonHeightSmall: { control: 'text' },
    buttonPressedColor: { control: 'color' },
    menuButtonMinWidth: { control: 'text' },
    menuButtonPadding: { control: 'text' },
    menuButtonGap: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  variant: Variant;
  direction: Direction;
  open?: boolean;
  buttonHeightLarge?: string;
  buttonHeightSmall?: string;
  buttonPressedColor?: string;
  menuButtonMinWidth?: string;
  menuButtonPadding?: string;
  menuButtonGap?: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  variant,
  direction,
  open,
  buttonHeightLarge,
  buttonHeightSmall,
  buttonPressedColor,
  menuButtonMinWidth,
  menuButtonPadding,
  menuButtonGap,
  slot,
}: ArgTypes) => html`
  <style>
    iz-menu-button {
      --button-height-large: ${buttonHeightLarge};
      --button-height-small: ${buttonHeightSmall};
      --button-pressed-color: ${buttonPressedColor};
      --menu-button-min-width: ${menuButtonMinWidth};
      --menu-button-padding: ${menuButtonPadding};
      --menu-button-gap: ${menuButtonGap};
    }
  </style>
  <iz-menu-button .direction=${direction} .variant=${variant} .open=${open}>
    ${slot}
  </iz-menu-button>
`;

export const Regular = Template.bind({});
Regular.args = {
  variant: 'default',
  direction: 'down',
  open: false,
  buttonHeightLarge: '40px',
  buttonHeightSmall: '25px',
  buttonPressedColor: 'white',
  menuButtonMinWidth: '3rem',
  menuButtonPadding: '0.2rem',
  menuButtonGap: '0.2rem',
  slot: html`Menu Button`,
};

export const TextVariant = Template.bind({});
TextVariant.args = {
  ...Regular.args,
  variant: 'text',
};

export const Icon = Template.bind({});
Icon.args = {
  ...Regular.args,
  variant: 'text',
  slot: html`<iz-icon-mail></iz-icon-mail>`,
};
