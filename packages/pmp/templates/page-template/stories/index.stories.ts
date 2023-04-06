import { html, TemplateResult } from 'lit';
import '../src/page-template.js';
import { UserModel } from '../src/PageTemplateExports.js';

export default {
  title: 'pmp/templates/PageTemplate',
  component: 'iz-pmp-page-template',
  argTypes: {
    userData: { control: 'object' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  userData?: UserModel;
}

const Template: Story<ArgTypes> = ({ userData = {} }) =>
  html` <iz-pmp-page-template .userData=${userData}></iz-pmp-page-template> `;

export const Regular = Template.bind({});

export const Admin = Template.bind({});
Admin.args = {
  userData: {
    role: 'admin',
  },
};
