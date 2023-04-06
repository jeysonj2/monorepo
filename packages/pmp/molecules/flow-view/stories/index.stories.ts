import { html, TemplateResult } from 'lit';
import '../src/flow-view.js';
import { Data, Variant } from '../src/FlowViewExports.js';

export default {
  title: 'pmp/molecules/FlowView',
  component: 'iz-pmp-flow-view',
  argTypes: {
    variant: { control: 'select', options: ['default', 'edit'] },
    data: { control: 'object' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  variant?: Variant;
  data?: Data;
}

const Template: Story<ArgTypes> = ({
  variant = 'default',
  data,
}: ArgTypes) => html`
  <iz-pmp-flow-view
    .variant=${variant}
    .data=${data}
  >
  </iz-pmp-flow-view>
`;

export const Regular = Template.bind({});
Regular.args = {
  data: {
    question: "Main Questoin",
    description: "Some description wow",
    id: "0",
    options: [
      { id: "1", value: "Option 1", checked: false },
      { id: "1", value: "Option 2", checked: false },
      { id: "1", value: "Option 3", checked: false },
    ]
  }
}

export const Edit = Template.bind({});
Edit.args = {
  ...Regular.args,
  variant: "edit"
}
