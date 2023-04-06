import { html, TemplateResult } from 'lit';
import '../src/popover.js';
import { Placement, Reveals } from '../src/PopoverExports.js';

export default {
  title: 'foundations/atoms/Popover',
  component: 'iz-popover',
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
    revealby: { control: 'select', options: ['click', 'hover'] },
    open: { control: 'boolean' },
    matchwidth: { control: 'boolean' },
    hideonoutsideclick: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  placement?: Placement;
  revealby?: Reveals;
  open?: boolean;
  matchwidth?: boolean;
  hideonoutsideclick?: boolean;
}

const Template: Story<ArgTypes> = ({
  placement,
  revealby,
  open,
  matchwidth,
  hideonoutsideclick,
}: ArgTypes) => html`
  <style>
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      min-height: 300px;
    }
    p {
      outline: 1px solid cornflowerblue;
    }
  </style>
  <div>
    <button id="target">im the target</button>

    <iz-popover
      target="#target"
      .placement=${placement}
      .revealby=${revealby}
      .open=${open}
      .matchwidth=${matchwidth}
      .hideonoutsideclick=${hideonoutsideclick}
    >
      <p>Im some content of the popup</p>
    </iz-popover>
  </div>
`;

export const Regular = Template.bind({});
Regular.args = {
  placement: 'bottom-center',
  hideonoutsideclick: true,
  matchwidth: false,
  open: true,
  revealby: 'click',
};
