import { html, TemplateResult } from 'lit';
import '../src/flow-roadmap.js';
import { Answer } from '../src/FlowRoadmapExports.js';

export default {
  title: 'pmp/atoms/FlowRoadmap',
  component: 'iz-pmp-flow-roadmap',
  argTypes: {
    answers: { control: 'array' },
    end: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  answers?: Answer[];
  end?: boolean;
}

const Template: Story<ArgTypes> = ({
  answers = [
    {
      option: 'Option 1',
      optionid: '1',
      question: 'First Question',
      questionId: '0',
    },
    {
      option: 'Option 3',
      optionid: '3',
      question: 'Second Question',
      questionId: '2',
    },
    {
      option: 'Option 4',
      optionid: '4',
      question: 'Third Question',
      questionId: '5',
    },
    {
      option: 'Option 7',
      optionid: '7',
      question: 'Fourth Question',
      questionId: '6',
    },
  ],
  end = false,
}: ArgTypes) => html`
  <iz-pmp-flow-roadmap .answers=${answers} class=${end ? 'end' : ''}>
  </iz-pmp-flow-roadmap>
`;

export const Regular = Template.bind({});

export const End = Template.bind({});
End.args = {
  end: true,
};
