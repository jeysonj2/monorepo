import { html, TemplateResult } from 'lit';
import { Variant } from '../src/BadgeExports.js';
import '../src/badge.js';

export default {
  title: 'foundations/molecules/Badge',
  component: 'iz-badge',
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info', 'default'],
    },
    slot: { control: 'text' }
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  variant?: Variant;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  variant = 'default',
  slot = html`Badge`,
}: ArgTypes) => html`<iz-badge variant=${variant}>${slot}</iz-badge>`;

const AllTemplate: Story<{}> = () => html`
  <iz-badge variant="success">success</iz-badge>
  <iz-badge variant="error">error</iz-badge>
  <iz-badge variant="warning">warning</iz-badge>
  <iz-badge variant="info">info</iz-badge>
  <iz-badge>default</iz-badge>
`

export const Regular = Template.bind({});
Regular.args = {
  variant: 'default'
}

export const All = AllTemplate.bind({});