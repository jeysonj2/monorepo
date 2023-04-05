import { html, TemplateResult } from 'lit';

// web components
import '@interzero-icons/icon-mail/wc';

import type { Size, Types, Variant } from '../src/ButtonExports.js';
import '../src/button.js';

export default {
  title: 'foundations/atoms/Button',
  component: 'iz-button',
  argTypes: {
    type: { control: 'select', options: ['button', 'reset', 'submit'] },
    variant: {
      control: 'select',
      options: ['text', 'default', 'square', 'circle'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
  },
};

interface ArgTypes {
  type?: Types;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  slot?: TemplateResult;
}

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const IndividualTemplate: Story<ArgTypes> = ({
  type = 'button',
  disabled = false,
  variant = 'default',
  size = 'large',
  slot = html`Button`,
}: ArgTypes) => html`
  <iz-button type=${type} .disabled=${disabled} variant=${variant} size=${size}>
    ${slot}
  </iz-button>
`;

const AllTemplate: Story<{}> = () => html`
  <style>
    .flex {
      display: flex;
      justify-content: space-between;
    }
    fieldset {
      width: 100%;
    }
  </style>
  <div class="flex">
    <fieldset>
      <legend>Size Small</legend>
      <h4>Default</h4>
      <iz-button size="small" onclick="console.log(event)">Button</iz-button>

      <h4>Text</h4>
      <iz-button size="small" onclick="console.log(event)" variant="text"
        >Button</iz-button
      >

      <h4>Circle</h4>
      <iz-button size="small" onclick="console.log(event)" variant="circle">
        <iz-icon-mail></iz-icon-mail>
      </iz-button>

      <h4>Square</h4>
      <iz-button size="small" onclick="console.log(event)" variant="square">
        <iz-icon-mail></iz-icon-mail>
      </iz-button>

      <h4>Disable:</h4>
      <iz-button size="small" onclick="console.log(event)" disabled
        >Button</iz-button
      >
      <br />
      <iz-button
        size="small"
        variant="text"
        onclick="console.log(event)"
        disabled
        >Button</iz-button
      >
      <br />
      <iz-button
        size="small"
        variant="square"
        onclick="console.log(event)"
        disabled
      >
        <iz-icon-mail></iz-icon-mail>
      </iz-button>
      <br />
      <iz-button
        size="small"
        variant="circle"
        onclick="console.log(event)"
        disabled
      >
        <iz-icon-mail></iz-icon-mail>
      </iz-button>
    </fieldset>

    <fieldset>
      <legend>Size Medium</legend>
      <h4>Default</h4>
      <iz-button size="medium" onclick="console.log(event)">Button</iz-button>

      <h4>Text</h4>
      <iz-button size="medium" onclick="console.log(event)" variant="text"
        >Button</iz-button
      >

      <h4>Circle</h4>
      <iz-button size="medium" onclick="console.log(event)" variant="circle">
        <iz-icon-mail></iz-icon-mail>
      </iz-button>

      <h4>Square</h4>
      <iz-button size="medium" onclick="console.log(event)" variant="square">
        <iz-icon-mail></iz-icon-mail>
      </iz-button>

      <h4>Disable:</h4>
      <iz-button size="medium" onclick="console.log(event)" disabled
        >Button</iz-button
      >
      <br />
      <iz-button
        size="medium"
        variant="text"
        onclick="console.log(event)"
        disabled
        >Button</iz-button
      >
      <br />
      <iz-button
        size="medium"
        variant="square"
        onclick="console.log(event)"
        disabled
      >
        <iz-icon-mail></iz-icon-mail>
      </iz-button>
      <br />
      <iz-button
        size="medium"
        variant="circle"
        onclick="console.log(event)"
        disabled
      >
        <iz-icon-mail></iz-icon-mail>
      </iz-button>
    </fieldset>

    <fieldset>
      <legend>Size Large</legend>
      <h4>Default</h4>
      <iz-button size="large" onclick="console.log(event)">Button</iz-button>

      <h4>Text</h4>
      <iz-button size="large" onclick="console.log(event)" variant="text"
        >Button</iz-button
      >

      <h4>Circle</h4>
      <iz-button size="large" onclick="console.log(event)" variant="circle">
        <iz-icon-mail></iz-icon-mail>
      </iz-button>

      <h4>Square</h4>
      <iz-button size="large" onclick="console.log(event)" variant="square">
        <iz-icon-mail></iz-icon-mail>
      </iz-button>

      <h4>Disable:</h4>
      <iz-button size="large" onclick="console.log(event)" disabled
        >Button</iz-button
      >
      <br />
      <iz-button
        size="large"
        variant="text"
        onclick="console.log(event)"
        disabled
        >Button</iz-button
      >
      <br />
      <iz-button
        size="large"
        variant="square"
        onclick="console.log(event)"
        disabled
      >
        <iz-icon-mail></iz-icon-mail>
      </iz-button>
      <br />
      <iz-button
        size="large"
        variant="circle"
        onclick="console.log(event)"
        disabled
      >
        <iz-icon-mail></iz-icon-mail>
      </iz-button>
    </fieldset>
  </div>
`;

export const Individual = IndividualTemplate.bind({});

export const All = AllTemplate.bind({});

export const TextVariant = IndividualTemplate.bind({});
TextVariant.args = {
  variant: 'text',
};

export const CircleVariant = IndividualTemplate.bind({});
CircleVariant.args = {
  variant: 'circle',
  slot: html`<iz-icon-mail></iz-icon-mail>`,
};

export const SquareVariant = IndividualTemplate.bind({});
SquareVariant.args = {
  variant: 'square',
  slot: html`<iz-icon-mail></iz-icon-mail>`,
};
