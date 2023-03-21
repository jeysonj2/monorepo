import { html, TemplateResult } from 'lit';
import type { Size } from '@interzero-icons/icon-base';
import '../src/icon-home.js';

export default {
  title: 'icons/IconHome',
  component: 'iz-icon-home',
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
  <iz-icon-home
    .size=${size}
    .color=${color}
    .rotate=${rotate}
    .width=${width}
    .height=${height}
  ></iz-icon-home>
`;

const AllTemplate: Story<ArgTypes> = () => html`
  <h4>Regular (medium size)</h4>
  <iz-icon-home></iz-icon-home>

  <h4>Small</h4>
  <iz-icon-home size="small"></iz-icon-home>

  <h4>Large</h4>
  <iz-icon-home size="large"></iz-icon-home>

  <hr />

  <h4>Custom Color</h4>
  <iz-icon-home color="red"></iz-icon-home>

  <h4>Custom Rotation</h4>
  <iz-icon-home rotate="60"></iz-icon-home>
`;

export const Regular = Template.bind({});

export const All = AllTemplate.bind({});
