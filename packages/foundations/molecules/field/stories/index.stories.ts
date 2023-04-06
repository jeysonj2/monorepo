import { html, TemplateResult } from 'lit';

import '@interzero/input/wc';
import '@interzero/typography/wc';
import '@interzero-icons/icon-mail/wc';
import '@interzero-icons/icon-lock/wc';

import '../src/field.js';

export default {
  title: 'foundations/molecules/Field',
  component: 'iz-field',
  argTypes: {
    label: { control: 'text' },
    help: { control: 'text' },
    counter: { control: 'boolean' },
    // style related
    gap: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  label: string;
  help: string;
  counter: boolean;
  gap: string;
  slot?: TemplateResult;
  left?: TemplateResult;
  right?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  label,
  help,
  counter,
  gap,
  slot,
  left,
  right,
}: ArgTypes) => html`
  <style>
    iz-field {
      --field-gap: ${gap};
    }
  </style>
  <iz-field .label=${label} .counter=${counter} .help=${help}>
    ${slot} ${left} ${right}
  </iz-field>
`;

const AllTemplate: Story<ArgTypes> = ({ gap }: ArgTypes) => html`
  <style>
    iz-field {
      --field-gap: ${gap};
    }
    .box {
      background-color: cornflowerblue;
      content: '';
    }
  </style>
  <h4>Regular</h4>
  <iz-field label="Label">
    <div class="box"></div>
    <div slot="right">R</div>
    <iz-icon-mail slot="left"></iz-icon-mail>
  </iz-field>

  <h4>Full</h4>
  <iz-field label="Label (full)" help="Help Text" counter>
    <div class="box"></div>
    <div slot="left">L</div>
    <div slot="right">R</div>
  </iz-field>

  <h4>With Counter</h4>
  <iz-field id="counter" counter label="Label (counter)">
    <div class="box"></div>
  </iz-field>

  <h4>With Help Text</h4>
  <iz-field id="help" label="Label (help)">
    <div class="box"></div>
  </iz-field>

  <form>
    <h4>With Error</h4>
    <iz-field id="error" label="Label (error)">
      <iz-input
        name="something"
        required
        .errors=${{ valueMissing: 'Missing Value' }}
        validateAtStart
      ></iz-input>
    </iz-field>

    <h4>With Warning</h4>
    <iz-field id="warning" label="Label (warning)">
      <iz-input
        name="something"
        required
        .warnings=${{ valueMissing: 'Missing Value' }}
        validateAtStart
      ></iz-input>
    </iz-field>

    <!-- <h4>With Success</h4>
  <iz-field id="success" label="Label (success)">
    <iz-input name="something" success="Successful" validateAtStart></iz-input>
  </iz-field> -->
  </form>

  <h3>Real Example</h3>
  <iz-field label="Label (full)" help="Help Text" counter>
    <iz-input maxLength="30"></iz-input>
    <div slot="left">L</div>
    <div slot="right">R</div>
  </iz-field>
`;

export const Regular = Template.bind({});
Regular.args = {
  label: 'Label',
  help: 'help',
  counter: false,
  gap: '0.4rem',
  slot: html`<iz-input maxLength="30"></iz-input>`,
  left: html`<div slot="left">L</div>`,
  right: html`<div slot="right">R</div>`,
};

export const All = AllTemplate.bind({});
All.args = {
  gap: '0.4rem',
};
