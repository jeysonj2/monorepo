import { html, TemplateResult } from 'lit';
import '../src/link.js';
import { Variant } from '../src/LinkExports.js';

export default {
  title: 'foundations/atoms/Link',
  component: 'iz-link',
  argTypes: {
    href: { control: 'text' },
    variant: { control: 'select', options: ['text', 'link'] },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  variant?: Variant;
  href: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  variant = 'link',
  href = '#',
  slot = html`link text`,
}: ArgTypes) => html`
  <iz-link .variant=${variant} .href=${href}>${slot}</iz-link>
`;

export const Regular = Template.bind({});

export const TextVariant = Template.bind({});
TextVariant.args = {
  variant: 'text',
};
