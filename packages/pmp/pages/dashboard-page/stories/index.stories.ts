import { html, TemplateResult } from 'lit';
import '../src/dashboard-page.js';

export default {
  title: 'pmp/pages/DashboardPage',
  component: 'iz-pmp-dashboard-page',
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {}

const Template: Story<ArgTypes> = () => html`
  <iz-pmp-dashboard-page></iz-pmp-dashboard-page>
`;

export const Regular = Template.bind({});
