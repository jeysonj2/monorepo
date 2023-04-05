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
    slot: { control: 'text' },
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
  <fieldset>
    <legend>Body (Default)</legend>
    <iz-typography>${slot}</iz-typography>
  </fieldset>

  <fieldset>
    <legend>Help</legend>
    <iz-typography variant="help">${slot}</iz-typography>
  </fieldset>

  <fieldset>
    <legend>Label</legend>
    <iz-typography variant="label">${slot}</iz-typography>
  </fieldset>

  <fieldset>
    <legend>Heading</legend>
    <iz-typography variant="heading">${slot}</iz-typography>
  </fieldset>

  <fieldset>
    <legend>Logo</legend>
    <iz-typography variant="logo">${slot}</iz-typography>
  </fieldset>

  <fieldset>
    <legend>LogoB</legend>
    <iz-typography variant="logob">${slot}</iz-typography>
  </fieldset>
`;

export const All = AllTemplate.bind({});
