import { html, TemplateResult } from 'lit';
import '../src/flow-page.js';
import { Data } from '../src/FlowPageExports.js';

export default {
  title: 'pmp/pages/FlowPage',
  component: 'iz-pmp-flow-page',
  argTypes: {
    role: { control: 'select', options: ['admin','user'] },
    data: { control: 'array' }
  },
};

const FakeData:Data[] = [
  {
    "question": "First options",
    "description": "select something wont you",
    "id": "0",
    "options": ["1", "2", "3"],
    "priceAffection": 1,
    "priceAffectionType": "addition",
    "value": ""
  },
  {
    "question": "Ohh wow you made it!",
    "description": "select something else",
    "id": "1",
    "options": ["4", "5"],
    "priceAffection": 5,
    "priceAffectionType": "addition",
    "value": "Åsna",
    "parent": "0"
  },
  {
    "question": "Ohh wow you made it!",
    "description": "select something else",
    "id": "2",
    "options": ["6", "7"],
    "priceAffection": 1.4,
    "priceAffectionType": "multiplication",
    "value": "Lennart",
    "parent": "0"
  },
  {
    "question": "Ohh wow you made it!",
    "description": "select something else",
    "id": "3",
    "options": ["8", "9"],
    "priceAffection": 8,
    "priceAffectionType": "addition",
    "value": "Bajs",
    "parent": "0"
  },
  {
    "question": "OH lala you made it here too!",
    "description": "well.. select something then!",
    "id": "4",
    "options": [],
    "priceAffection": 9,
    "priceAffectionType": "addition",
    "value": "Ekorre",
    "parent": "1"
  },
  {
    "question": "OH lala you made it here too!",
    "description": "well.. select something then!",
    "id": "5",
    "options": [],
    "priceAffection": 1.2,
    "priceAffectionType": "multiplication",
    "value": "Snigel",
    "parent": "1"
  },
  {
    "question": "OH lala you made it here too!",
    "description": "well.. select something then!",
    "id": "6",
    "options": [],
    "priceAffection": 15,
    "priceAffectionType": "addition",
    "value": "Lampa",
    "parent": "2"
  },
  {
    "question": "OH lala you made it here too!",
    "description": "well.. select something then!",
    "id": "7",
    "options": [],
    "priceAffection": 12,
    "priceAffectionType": "addition",
    "value": "Bordsben",
    "parent": "2"
  },
  {
    "question": "OH lala you made it here too!",
    "description": "well.. select something then!",
    "id": "8",
    "options": [],
    "priceAffection": 19,
    "priceAffectionType": "addition",
    "value": "Fika",
    "parent": "3"
  },
  {
    "question": "OH lala you made it here too!",
    "description": "well.. select something then!",
    "id": "9",
    "options": [],
    "priceAffection": 2.4,
    "priceAffectionType": "multiplication",
    "value": "Kaka",
    "parent": "3"
  },
]

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  role: "admin"|"user";
  data: Data[];
}

const Template: Story<ArgTypes> = ({
  role = "user",
  data,
}: ArgTypes) => html`
  <iz-pmp-flow-page
    .userData=${{role}}
    .data=${data}
  >
  </iz-pmp-flow-page>
`;

export const Regular = Template.bind({});
Regular.args = {
  data: FakeData
}
