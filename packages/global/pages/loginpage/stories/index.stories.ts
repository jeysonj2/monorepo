import { html, TemplateResult } from 'lit';
import { Variant } from '../src/index.js';
import '../src/loginpage.js';

export default {
  title: 'global/pages/Loginpage',
  component: 'iz-global-loginpage',
  argTypes: {
    variant: {
      control: 'select',
      options: ['login', 'register', 'reset', 'update'],
    },
    cssLeftBackground: { control: 'text' },
    cssRightBackground: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  variant?: Variant;
  cssLeftBackground: string;
  cssRightBackground: string;
}

const Template: Story<ArgTypes> = ({
  variant,
  cssLeftBackground,
  cssRightBackground,
}: ArgTypes) => html`
  <style>
    iz-global-loginpage {
      --loginpage-left-background: ${cssLeftBackground};
      --loginpage-right-background: ${cssRightBackground};
    }
  </style>
  <iz-global-loginpage .variant=${variant}></iz-global-loginpage>
`;

export const Regular = Template.bind({});
Regular.args = {
  variant: 'login',
  cssLeftBackground: '#c4c4c4',
  cssRightBackground: '#e4e4e4',
};
