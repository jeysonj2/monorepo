import { html, TemplateResult } from 'lit';
import { Types } from '../src/index.js';
import '../src/input.js';

export default {
  title: 'foundations/atoms/Input',
  component: 'iz-input',
  argTypes: {
    placeholder: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'number', 'password', 'email', 'url', 'tel'],
    },
    textarea: { control: 'boolean' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  placeholder: string;
  type: Types;
  textarea: boolean;
}

const IndividualTemplate: Story<ArgTypes> = ({
  placeholder = 'Type something',
  type = 'text',
  textarea = false,
}: ArgTypes) => html`
  <iz-input
    .type=${type}
    .textarea=${textarea}
    .placeholder=${placeholder}
  ></iz-input>
`;

const AllTemplate: Story<{}> = () => html`
  <style>
    .flex {
      display: flex;
      justify-content: space-between;
    }
  </style>
  <div class="flex">
    <fieldset>
      <legend>Size = small</legend>
      <h1>Basic</h1>
      <div class="field">
        <h2>Regular</h2>
        <iz-input placeholder="placeholder"></iz-input>
      </div>

      <div class="field">
        <h2>Textarea</h2>
        <iz-input textarea placeholder="placeholder"></iz-input>
      </div>

      <div class="field">
        <h2>Disabled</h2>
        <iz-input disabled placeholder="placeholder"></iz-input>
      </div>

      <div class="field">
        <h2>With Value</h2>
        <iz-input defaultValue="Hello"></iz-input>
      </div>

      <h1>Variants</h1>
      <div class="field">
        <h2>Number</h2>
        <iz-input type="number" value=""></iz-input>
      </div>

      <div class="field">
        <h2>Number (with defaultValue)</h2>
        <iz-input min="2" type="number" value="3"></iz-input>
      </div>

      <div class="field">
        <h2>Password</h2>
        <iz-input type="password" placeholder="password"></iz-input>
      </div>

      <div class="field">
        <h2>Email</h2>
        <iz-input
          type="email"
          placeholder="e-mail"
          defaultValue="henry.pap@interzero.de"
        ></iz-input>
      </div>

      <div class="field">
        <h2>Url</h2>
        <iz-input
          type="url"
          placeholder="url"
          defaultValue="http://google.com"
        ></iz-input>
      </div>

      <div class="field">
        <h2>Tel</h2>
        <iz-input
          style="width: 30rem;"
          type="tel"
          defaultValue="123456789"
        ></iz-input>
      </div>
    </fieldset>
    <fieldset>
      <legend>Size = medium</legend>
      <h1>Basic</h1>
      <div class="field">
        <h2>Regular</h2>
        <iz-input size="medium" placeholder="placeholder"></iz-input>
      </div>

      <div class="field">
        <h2>Textarea</h2>
        <iz-input size="medium" textarea placeholder="placeholder"></iz-input>
      </div>

      <div class="field">
        <h2>Disabled</h2>
        <iz-input size="medium" disabled placeholder="placeholder"></iz-input>
      </div>

      <div class="field">
        <h2>With Value</h2>
        <iz-input size="medium" defaultValue="Hello"></iz-input>
      </div>

      <h1>Variants</h1>
      <div class="field">
        <h2>Number</h2>
        <iz-input size="medium" type="number" value=""></iz-input>
      </div>

      <div class="field">
        <h2>Number (with defaultValue)</h2>
        <iz-input size="medium" min="2" type="number" value="3"></iz-input>
      </div>

      <div class="field">
        <h2>Password</h2>
        <iz-input
          size="medium"
          type="password"
          placeholder="password"
        ></iz-input>
      </div>

      <div class="field">
        <h2>Email</h2>
        <iz-input
          size="medium"
          type="email"
          placeholder="e-mail"
          defaultValue="henry.pap@interzero.de"
        ></iz-input>
      </div>

      <div class="field">
        <h2>Url</h2>
        <iz-input
          size="medium"
          type="url"
          placeholder="url"
          defaultValue="http://google.com"
        ></iz-input>
      </div>

      <div class="field">
        <h2>Tel</h2>
        <iz-input
          size="medium"
          style="width: 30rem;"
          type="tel"
          defaultValue="123456789"
        ></iz-input>
      </div>
    </fieldset>
    <fieldset>
      <legend>Size = large</legend>
      <h1>Basic</h1>
      <div class="field">
        <h2>Regular</h2>
        <iz-input size="large" placeholder="placeholder"></iz-input>
      </div>

      <div class="field">
        <h2>Textarea</h2>
        <iz-input size="large" textarea placeholder="placeholder"></iz-input>
      </div>

      <div class="field">
        <h2>Disabled</h2>
        <iz-input size="large" disabled placeholder="placeholder"></iz-input>
      </div>

      <div class="field">
        <h2>With Value</h2>
        <iz-input size="large" defaultValue="Hello"></iz-input>
      </div>

      <h1>Variants</h1>
      <div class="field">
        <h2>Number</h2>
        <iz-input size="large" type="number" value=""></iz-input>
      </div>

      <div class="field">
        <h2>Number (with defaultValue)</h2>
        <iz-input size="large" min="2" type="number" value="3"></iz-input>
      </div>

      <div class="field">
        <h2>Password</h2>
        <iz-input
          size="large"
          type="password"
          placeholder="password"
        ></iz-input>
      </div>

      <div class="field">
        <h2>Email</h2>
        <iz-input
          size="large"
          type="email"
          placeholder="e-mail"
          defaultValue="henry.pap@interzero.de"
        ></iz-input>
      </div>

      <div class="field">
        <h2>Url</h2>
        <iz-input
          size="large"
          type="url"
          placeholder="url"
          defaultValue="http://google.com"
        ></iz-input>
      </div>

      <div class="field">
        <h2>Tel</h2>
        <iz-input
          size="large"
          style="width: 30rem;"
          type="tel"
          defaultValue="123456789"
        ></iz-input>
      </div>
    </fieldset>
  </div>
`;

export const Regular = IndividualTemplate.bind({});

export const Textarea = IndividualTemplate.bind({});
Textarea.args = {
  textarea: true,
};

export const All = AllTemplate.bind({});
