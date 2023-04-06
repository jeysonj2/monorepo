import { html, TemplateResult } from 'lit';
import '../src/flow-end.js';

export default {
  title: 'pmp/atoms/FlowEnd',
  component: 'iz-pmp-flow-end',
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {}

const Template: Story<ArgTypes> = () => html`
  <iz-pmp-flow-end></iz-pmp-flow-end>
`;

export const Regular = Template.bind({});
