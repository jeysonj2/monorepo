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
    passwordMinlength: { control: 'number' },
    columnGap: { control: 'text' },
    rowGap: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  variant: Variant;
  passwordMinlength: number;
  columnGap: string;
  rowGap: string;
}

const Template: Story<ArgTypes> = ({
  variant,
  passwordMinlength,
  columnGap,
  rowGap,
}: ArgTypes) => html`
  <style>
    iz-global-login-form {
      --login-form-column-gap: ${columnGap};
      --login-form-row-gap: ${rowGap};
    }
  </style>
  <iz-global-login-form
    .passwordMinlength=${passwordMinlength}
    .variant=${variant}
  ></iz-global-login-form>
`;

export const Login = Template.bind({});
Login.args = {
  variant: 'login',
  passwordMinlength: 5,
  columnGap: '2rem',
  rowGap: '1rem',
};

export const Register = Template.bind({});
Register.args = {
  ...Login.args,
  variant: 'register',
};

export const Reset = Template.bind({});
Reset.args = {
  ...Login.args,
  variant: 'reset',
};

export const Update = Template.bind({});
Update.args = {
  ...Login.args,
  variant: 'update',
};
