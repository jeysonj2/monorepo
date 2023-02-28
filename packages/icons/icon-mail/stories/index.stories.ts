import { html, TemplateResult } from 'lit';
import type { Size } from '@interzero-icons/icon-base';
import '../src/icon-mail.js';

export default {
  title: 'icons/IconMail',
  component: 'iz-icon-mail',
  argTypes: {
    color: { control: 'color' },
    title: { control: 'text' },
    rotate: { control: 'number' },
    width: { control: 'number' },
    height: { control: 'number' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  size: Size;
  color: string;
  rotate: number;
  width?: number;
  height?: number;
}

const Template: Story<ArgTypes> = ({
  size = 'medium',
  color = 'black',
  rotate = 0,
  width,
  height,
}: ArgTypes) => html`
  <iz-icon-mail
    .size=${size}
    .color=${color}
    .rotate=${rotate}
    .width=${width}
    .height=${height}
  ></iz-icon-mail>
`;

const AllTemplate: Story<ArgTypes> = () => html`
  <h4>Regular (medium size)</h4>
  <iz-icon-mail></iz-icon-mail>

  <h4>Small</h4>
  <iz-icon-mail size="small"></iz-icon-mail>

  <h4>Large</h4>
  <iz-icon-mail size="large"></iz-icon-mail>

  <hr />

  <h4>Custom Color</h4>
  <iz-icon-mail color="red"></iz-icon-mail>

  <h4>Custom Rotation</h4>
  <iz-icon-mail rotate="60"></iz-icon-mail>
`;

export const Regular = Template.bind({});

export const All = AllTemplate.bind({});
