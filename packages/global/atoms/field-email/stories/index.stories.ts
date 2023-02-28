import { html, TemplateResult } from 'lit';
import '../src/field-email.js';

export default {
  title: 'global/atoms/FieldEmail',
  component: 'iz-global-field-email',
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {}

const Template: Story<ArgTypes> = () => html`
  <iz-global-field-email></iz-global-field-email>
`;

export const Regular = Template.bind({});
