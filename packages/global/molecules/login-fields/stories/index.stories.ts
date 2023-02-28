import { html, TemplateResult } from 'lit';
import '../src/login-fields.js';

export default {
  title: 'global/molecules/LoginFields',
  component: 'iz-global-login-fields',
  argTypes: {
    forgotLink: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  forgotLink: string;
}

const Template: Story<ArgTypes> = ({ forgotLink }: ArgTypes) => html`
  <iz-global-login-fields .forgotLink=${forgotLink}></iz-global-login-fields>
`;

export const Regular = Template.bind({});
