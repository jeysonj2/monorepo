import { html, TemplateResult } from 'lit';
import '../src/flow-question.js';

export default {
  title: 'pmp/atoms/FlowQuestion',
  component: 'iz-pmp-flow-question',
  argTypes: {
    question: { control: 'text' },
    description: { control: 'text' },
    editMode: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  question?: string;
  description?: string;
  editMode?: boolean;
}

const Template: Story<ArgTypes> = ({
  question = 'The Question',
  description = 'Some description goes here',
  editMode = false,
}: ArgTypes) => html`
  <iz-pmp-flow-question
    .question=${question}
    .description=${description}
    .editMode=${editMode}
  >
  </iz-pmp-flow-question>
`;

export const Regular = Template.bind({});
