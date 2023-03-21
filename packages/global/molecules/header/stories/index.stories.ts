import { html, TemplateResult } from 'lit';
import '@interzero/menu/wc';
import '@interzero/menu-item/wc';
import '../src/header.js';

export default {
  title: 'global/molecules/Header',
  component: 'iz-global-header',
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({ slot }: ArgTypes) => html`
  <iz-global-header> ${slot} </iz-global-header>
`;

export const Regular = Template.bind({});

export const WithMenus = Template.bind({});
WithMenus.args = {
  slot: html`
    <iz-menu variant="text">
      <p slot="text">Menu 1</p>
      <iz-menu-item value="A">A</iz-menu-item>
      <iz-menu-item value="B">B</iz-menu-item>
      <iz-menu-item value="C">C</iz-menu-item>
      <iz-menu-item value="D">D</iz-menu-item>
    </iz-menu>
    <iz-menu variant="text">
      <p slot="text">Menu 2</p>
      <iz-menu-item value="A">A</iz-menu-item>
      <iz-menu-item value="B">B</iz-menu-item>
      <iz-menu-item value="C">C</iz-menu-item>
      <iz-menu-item value="D">D</iz-menu-item>
    </iz-menu>
    <iz-menu variant="text">
      <p slot="text">Menu 3</p>
      <iz-menu-item value="A">A</iz-menu-item>
      <iz-menu-item value="B">B</iz-menu-item>
      <iz-menu-item value="C">C</iz-menu-item>
      <iz-menu-item value="D">D</iz-menu-item>
    </iz-menu>
  `,
};
