import { html, TemplateResult } from 'lit';
import '../src/field-password.js';

export default {
  title: 'global/atoms/FieldPassword',
  component: 'iz-global-field-password',
  argTypes: {
    label: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  label: string;
}

const Template: Story<ArgTypes> = ({ label }: ArgTypes) => html`
  <iz-global-field-password .label=${label}></iz-global-field-password>
`;

export const Regular = Template.bind({});
