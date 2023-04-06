import { html, TemplateResult } from 'lit';
import '../src/login-links.js';

export default {
  title: 'global/atoms/LoginLinks',
  component: 'iz-global-login-links',
  argTypes: {
    contactLink: { control: 'text' },
    interzeroLink: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  contactLink: string;
  interzeroLink: string;
}

const Template: Story<ArgTypes> = ({
  contactLink,
  interzeroLink,
}: ArgTypes) => html`
  <iz-global-login-links
    .contactLink=${contactLink}
    .interzeroLink=${interzeroLink}
  ></iz-global-login-links>
`;

export const Regular = Template.bind({});
Regular.args = {
  contactLink: '#contact',
  interzeroLink: '#homepage',
};
