import { html, TemplateResult } from 'lit';
import type { Placement } from '@interzero/popover';
import '../src/user-menu.js';

export default {
  title: 'global/atoms/UserMenu',
  component: 'iz-global-user-menu',
  argTypes: {
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
    cssMenuButtonWidth: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  placement?: Placement;
  cssMenuButtonWidth?: string;
}

const Template: Story<ArgTypes> = ({
  placement,
  cssMenuButtonWidth,
}: ArgTypes) => html`
  <style>
    iz-global-user-menu {
      --user-menu-button-width: ${cssMenuButtonWidth};
    }
    div {
      min-height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
  <div>
    <iz-global-user-menu .placement=${placement}> </iz-global-user-menu>
  </div>
`;

export const Regular = Template.bind({});
Regular.args = {
  placement: 'bottom-left',
  cssMenuButtonWidth: '3rem',
};
