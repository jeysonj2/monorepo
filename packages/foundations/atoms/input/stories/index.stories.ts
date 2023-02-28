import { html, TemplateResult } from 'lit';
import { Types } from '../src/index.js';
import '../src/input.js';

export default {
  title: 'foundations/atoms/Input',
  component: 'iz-input',
  argTypes: {
    placeholder: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'number', 'password', 'email', 'url', 'tel'],
    },
    textarea: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  placeholder: string;
  type: Types;
  textarea: boolean;
}

const Template: Story<ArgTypes> = ({
  placeholder = 'Type something',
  type = 'text',
  textarea = false,
}: ArgTypes) => html`
  <iz-input
    .type=${type}
    .textarea=${textarea}
    .placeholder=${placeholder}
  ></iz-input>
`;

export const Regular = Template.bind({});

export const Textarea = Template.bind({});
Textarea.args = {
  textarea: true,
};
