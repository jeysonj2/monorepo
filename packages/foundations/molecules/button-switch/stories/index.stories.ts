import { html, TemplateResult } from 'lit';
import type { Size } from '@interzero/button';
import '../src/button-switch.js';
import type { ActiveState } from '../src/ButtonSwitchExports.js';

export default {
  title: 'foundations/molecules/ButtonSwitch',
  component: 'iz-button-switch',
  argTypes: {
    left: { control: 'text' },
    right: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    active: { control: 'seledt', options: ['left', 'right'] },
    noInternalClick: { control: 'boolan' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  left: string;
  right: string;
  size: Size;
  active: ActiveState;
  noInternalClick: boolean;
}

const Template: Story<ArgTypes> = ({
  left = 'Left',
  right = 'Right',
  size = 'medium',
  active,
  noInternalClick,
}: ArgTypes) => html`
  <iz-button-switch
    .left=${left}
    .right=${right}
    .size=${size}
    .active=${active}
    .noInternalClick=${noInternalClick}
  >
  </iz-button-switch>
`;

export const Regular = Template.bind({});
