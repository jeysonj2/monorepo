import { html, TemplateResult } from 'lit';
import '../src/flow-content.js';
import { Data, Variant } from '../src/FlowContentExports.js';

export default {
  title: 'pmp/organisms/FlowContent',
  component: 'iz-pmp-flow-content',
  argTypes: {
    variant: { control: 'select', options: ['default', 'edit'] },
  },
};

const FakeData:Data[] = [
  {
    question: 'First options',
    description: 'select something wont you',
    id: '0',
    options: ['1', '2', '3'],
    priceAffection: 1,
    priceAffectionType: 'addition',
    value: '',
  },
  {
    question: 'Ohh wow you made it!',
    description: 'select something else',
    id: '1',
    options: ['4', '5'],
    priceAffection: 5,
    priceAffectionType: 'addition',
    value: 'Åsna',
    parent: '0',
  },
  {
    question: 'Ohh wow you made it!',
    description: 'select something else',
    id: '2',
    options: ['6', '7'],
    priceAffection: 1.4,
    priceAffectionType: 'multiplication',
    value: 'Lennart',
    parent: '0',
  },
  {
    question: 'Ohh wow you made it!',
    description: 'select something else',
    id: '3',
    options: ['8', '9'],
    priceAffection: 8,
    priceAffectionType: 'addition',
    value: 'Bajs',
    parent: '0',
  },
  {
    question: 'OH lala you made it here too!',
    description: 'well.. select something then!',
    id: '4',
    options: [],
    priceAffection: 9,
    priceAffectionType: 'addition',
    value: 'Ekorre',
    parent: '1',
  },
  {
    question: 'OH lala you made it here too!',
    description: 'well.. select something then!',
    id: '5',
    options: [],
    priceAffection: 1.2,
    priceAffectionType: 'multiplication',
    value: 'Snigel',
    parent: '1',
  },
  {
    question: 'OH lala you made it here too!',
    description: 'well.. select something then!',
    id: '6',
    options: [],
    priceAffection: 15,
    priceAffectionType: 'addition',
    value: 'Lampa',
    parent: '2',
  },
  {
    question: 'OH lala you made it here too!',
    description: 'well.. select something then!',
    id: '7',
    options: [],
    priceAffection: 12,
    priceAffectionType: 'addition',
    value: 'Bordsben',
    parent: '2',
  },
  {
    question: 'OH lala you made it here too!',
    description: 'well.. select something then!',
    id: '8',
    options: [],
    priceAffection: 19,
    priceAffectionType: 'addition',
    value: 'Fika',
    parent: '3',
  },
  {
    question: 'OH lala you made it here too!',
    description: 'well.. select something then!',
    id: '9',
    options: [],
    priceAffection: 2.4,
    priceAffectionType: 'multiplication',
    value: 'Kaka',
    parent: '3',
  },
];

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  data: Data[];
  root: Data;
  variant: Variant;
}

const Template: Story<ArgTypes> = ({ 
    variant = 'default',
    root,
    data,
  }: ArgTypes) => html`
  <iz-pmp-flow-content
    .data=${data}
    .root=${root}
    .variant=${variant}
  >
  </iz-pmp-flow-content>
`;

export const Regular = Template.bind({});
Regular.args = {
  data: FakeData,
  root: FakeData[0],
}
