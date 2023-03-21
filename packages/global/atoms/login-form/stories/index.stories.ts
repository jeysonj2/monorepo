import { html, TemplateResult } from 'lit';
import { Variant } from '../src/index.js';
import '../src/login-form.js';

export default {
  title: 'global/atoms/LoginForm',
  component: 'iz-global-login-form',
  argTypes: {
    variant: {
      control: 'select',
      options: ['login', 'register', 'update', 'reset'],
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  variant: Variant;
}

const Template: Story<ArgTypes> = ({ variant = 'login' }: ArgTypes) => html`
  <iz-global-login-form .variant=${variant}></iz-global-login-form>
`;

export const Login = Template.bind({});

export const Register = Template.bind({});
Register.args = {
  variant: 'register',
};

export const Reset = Template.bind({});
Reset.args = {
  variant: 'reset',
};

export const Update = Template.bind({});
Update.args = {
  variant: 'update',
};
