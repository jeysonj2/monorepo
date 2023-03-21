import { html, TemplateResult } from 'lit';
import '../src/page-template.js';

export default {
  title: 'pmp/templates/PageTemplate',
  component: 'iz-pmp-page-template',
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  slot = html`<h1>Page Content</h1>`,
}: ArgTypes) => html` <iz-pmp-page-template> ${slot} </iz-pmp-page-template> `;

export const Regular = Template.bind({});
