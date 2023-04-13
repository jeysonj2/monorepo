import { html, TemplateResult } from 'lit';
import type { Size } from '@interzero-icons/icon-base';
import '../src/icon-arrow.js';

export default {
  title: 'icons/IconArrow',
  component: 'iz-icon-arrow',
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
  <iz-icon-arrow
    .size=${size}
    .color=${color}
    .rotate=${rotate}
    .width=${width}
    .height=${height}
  ></iz-icon-arrow>
`;

const AllTemplate: Story<ArgTypes> = () => html`
  <h4>Regular (medium size)</h4>
  <iz-icon-arrow></iz-icon-arrow>

  <h4>Small</h4>
  <iz-icon-arrow size="small"></iz-icon-arrow>

  <h4>Large</h4>
  <iz-icon-arrow size="large"></iz-icon-arrow>

  <hr />

  <h4>Custom Color</h4>
  <iz-icon-arrow color="red"></iz-icon-arrow>

  <h4>Custom Rotation</h4>
  <iz-icon-arrow rotate="60"></iz-icon-arrow>
`;

export const Regular = Template.bind({});

export const All = AllTemplate.bind({});
