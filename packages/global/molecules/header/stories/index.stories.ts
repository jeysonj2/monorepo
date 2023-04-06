import { html, TemplateResult } from 'lit';
import '@interzero/menu/wc';
import '@interzero/menu-item/wc';
import '../src/header.js';

export default {
  title: 'global/molecules/Header',
  component: 'iz-global-header',
  argTypes: {
    cssHeight: { control: 'text' },
    cssGap: { control: 'text' },
    cssBackgroundColor: { control: 'color' },
    cssPadding: { control: 'text' },
    cssColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  slot?: TemplateResult;
  cssBackgroundColor: string;
  cssColor: string;
  cssGap: string;
  cssHeight: string;
  cssPadding: string;
}

const Template: Story<ArgTypes> = ({
  slot,
  cssBackgroundColor,
  cssColor,
  cssGap,
  cssHeight,
  cssPadding,
}: ArgTypes) => html`
  <style>
    iz-global-header {
      --header-height: ${cssHeight};
      --header-gap: ${cssGap};
      --header-background-color: ${cssBackgroundColor};
      --header-padding: ${cssPadding};
      --header-color: ${cssColor};
    }
  </style>
  <iz-global-header> ${slot} </iz-global-header>
`;

export const Regular = Template.bind({});
Regular.args = {
  cssHeight: '60px',
  cssGap: '0.5rem',
  cssBackgroundColor: '#fcfcfc',
  cssPadding: '1rem',
  cssColor: 'var(--colors-neutral-black, black)',
};

export const WithMenus = Template.bind({});
WithMenus.args = {
  ...Regular.args,
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
