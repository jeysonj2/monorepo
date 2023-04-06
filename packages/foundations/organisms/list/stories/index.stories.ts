import { html, TemplateResult } from 'lit';
import '@interzero/list-item/wc';
import '../src/list.js';

export default {
  title: 'foundations/organisms/List',
  component: 'iz-list',
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {}

const Template: Story<ArgTypes> = () => html`
  <fieldset>
    <legend>Regular</legend>
    <iz-list>
      <iz-list-item>item 1</iz-list-item>
      <iz-list-item>item 2</iz-list-item>
      <iz-list-item>item 3</iz-list-item>
      <iz-list-item>item 4</iz-list-item>
      <iz-list-item>item 5</iz-list-item>
      <iz-list-item>item 6</iz-list-item>
      <iz-list-item>item 7</iz-list-item>
    </iz-list>
  </fieldset>
`;

export const Regular = Template.bind({});
