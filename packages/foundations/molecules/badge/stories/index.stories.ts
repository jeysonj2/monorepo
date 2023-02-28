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
  variant = 'success',
  slot = html`Badge`,
}: ArgTypes) => html` <iz-badge variant=${variant}> ${slot} </iz-badge> `;

export const Regular = Template.bind({});
