import { html, TemplateResult } from 'lit';
import '../src/typography.js';
import { Variant } from '../src/TypographyExports.js';

export default {
  title: 'foundations/atoms/Typography',
  component: 'iz-typography',
  argTypes: {
    variant: {
      control: 'select',
      options: ['heading', 'body', 'logo', 'logob', 'help', 'label'],
    },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  variant: Variant;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  variant = 'body',
  slot = html`Hello World`,
}: ArgTypes) => html`
  <iz-typography .variant=${variant}>${slot}</iz-typography>
`;

export const Regular = Template.bind({});

const AllTemplate: Story<ArgTypes> = ({
  slot = html`Hello World`,
}: ArgTypes) => html`
  <h4>#### Body</h4>
  <iz-typography variant="body">${slot}</iz-typography>
  <h4>#### heading</h4>
  <iz-typography variant="heading">${slot}</iz-typography>
  <h4>#### logo</h4>
  <iz-typography variant="logo">${slot}</iz-typography>
  <h4>#### logob</h4>
  <iz-typography variant="logob">${slot}</iz-typography>
  <h4>#### help</h4>
  <iz-typography variant="help">${slot}</iz-typography>
  <h4>#### label</h4>
  <iz-typography variant="label">${slot}</iz-typography>
`;

export const All = AllTemplate.bind({});
