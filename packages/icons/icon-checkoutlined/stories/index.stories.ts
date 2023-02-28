import { html, TemplateResult } from 'lit';
import type { Size } from '@interzero-icons/icon-base';
import '../src/icon-checkoutlined.js';

export default {
  title: 'icons/IconCheckoutlined',
  component: 'iz-icon-checkoutlined',
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
  <iz-icon-checkoutlined
    .size=${size}
    .color=${color}
    .rotate=${rotate}
    .width=${width}
    .height=${height}
  ></iz-icon-checkoutlined>
`;

const AllTemplate: Story<ArgTypes> = () => html`
  <h4>Regular (medium size)</h4>
  <iz-icon-checkoutlined></iz-icon-checkoutlined>

  <h4>Small</h4>
  <iz-icon-checkoutlined size="small"></iz-icon-checkoutlined>

  <h4>Large</h4>
  <iz-icon-checkoutlined size="large"></iz-icon-checkoutlined>

  <hr />

  <h4>Custom Color</h4>
  <iz-icon-checkoutlined color="red"></iz-icon-checkoutlined>

  <h4>Custom Rotation</h4>
  <iz-icon-checkoutlined rotate="60"></iz-icon-checkoutlined>
`;

export const Regular = Template.bind({});

export const All = AllTemplate.bind({});
