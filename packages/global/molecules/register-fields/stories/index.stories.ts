import { html, TemplateResult } from 'lit';
import '../src/register-fields.js';

export default {
  title: 'global/molecules/RegisterFields',
  component: 'iz-global-register-fields',
  argTypes: {
    forgotLink: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {}

const Template: Story<ArgTypes> = () => html`
  <iz-global-register-fields></iz-global-register-fields>
`;

export const Regular = Template.bind({});
