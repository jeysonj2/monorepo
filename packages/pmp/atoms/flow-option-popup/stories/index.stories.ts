import { html, TemplateResult } from 'lit';
import '../src/flow-option-popup.js';

export default {
  title: 'pmp/atoms/FlowOptionPopup',
  component: 'iz-pmp-flow-option-popup',
  argTypes: {
    priceAffection: { control: 'number' },
    priceAffectionType: {
      control: 'select',
      options: ['addition', 'multiplication'],
    },
    value: { control: 'text' },
    edit: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  priceAffection?: number;
  priceAffectionType?: string;
  value?: string;
  edit?: boolean;
}

const Template: Story<ArgTypes> = ({
  priceAffection = 10,
  priceAffectionType = 'addition',
  value = 'Value',
  edit = false,
}: ArgTypes) => html`
  <button id="button">open popup</button>
  <iz-pmp-flow-option-popup
    id="popup"
    .data=${{
      id: edit ? 'id' : undefined,
      value,
      priceAffectionType,
      priceAffection,
    }}
  >
  </iz-pmp-flow-option-popup>
  <script>
    window.button.onclick = () => window.popup.show();
  </script>
`;

const AllTemplate: Story<ArgTypes> = () => html`
  <fieldset>
    <legend>Add</legend>
    <button id="add">open popup</button>
    <iz-pmp-flow-option-popup id="addpopup"></iz-pmp-flow-option-popup>
  </fieldset>

  <fieldset>
    <legend>Edit</legend>
    <button id="edit">open popup</button>
    <iz-pmp-flow-option-popup
      .data=${{
        value: 'value',
        priceAffection: 10,
        priceAffectionType: 'addition',
        id: 'id',
      }}
      id="editpopup"
    ></iz-pmp-flow-option-popup>
  </fieldset>
  <script>
    window.edit.onclick = () => window.editpopup.show();
    window.add.onclick = () => window.addpopup.show();
  </script>
`;

export const Regular = Template.bind({});

export const All = AllTemplate.bind({});
