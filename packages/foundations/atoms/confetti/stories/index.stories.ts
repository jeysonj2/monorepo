import { html, TemplateResult } from 'lit';
import '../src/confetti.js';
import { Placement } from '../src/ConfettiExports.js';

export default {
  title: 'foundations/atoms/Confetti',
  component: 'iz-confetti',
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'center-right',
        'top-right',
        'top-center',
        'top-left',
        'center-left',
        'center-center',
      ],
    },
    particleAmount: { control: 'number' },
    particleDelay: { control: 'number' },
    particleSpread: { control: 'number' },
    width: { control: 'number' },
    height: { control: 'number' },
    playPopSound: { control: 'boolean' },
    playYaySound: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  placement?: Placement;
  particleAmount?: number;
  particleDelay?: number;
  particleSpread?: number;
  width?: number;
  height?: number;
  playPopSound?: boolean;
  playYaySound?: boolean;
}

const Template: Story<ArgTypes> = ({
  placement = 'center-center',
  particleAmount = 20,
  particleDelay = 800,
  particleSpread = Math.PI / 3,
  width = 200,
  height = 200,
  playPopSound = true,
  playYaySound = true,
}: ArgTypes) => html`
  <button
    amount=${particleAmount}
    spread=${particleSpread}
    delay=${particleDelay}
    id="shoot"
  >
    SHOOT
  </button>
  <iz-confetti
    id="confetti"
    .placements=${[placement]}
    .width=${width}
    .height=${height}
    .playPopSound=${playPopSound}
    .playYaySound=${playYaySound}
  ></iz-confetti>

  <script>
    window.shoot.onclick = () => {
      window.confetti.shoot(
        Number(window.shoot.getAttribute('delay')),
        Number(window.shoot.getAttribute('amount')),
        Number(window.shoot.getAttribute('spread'))
      );
    };
  </script>
`;

export const Regular = Template.bind({});
