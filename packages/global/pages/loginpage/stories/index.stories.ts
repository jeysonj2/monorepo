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
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  variant?: Variant;
}

const Template: Story<ArgTypes> = ({ variant = 'login' }: ArgTypes) => html`
  <iz-global-loginpage .variant=${variant}></iz-global-loginpage>
`;

export const Regular = Template.bind({});
