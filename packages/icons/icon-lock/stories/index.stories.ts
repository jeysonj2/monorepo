import { html, TemplateResult } from 'lit';
import type { Size } from '@interzero-icons/icon-base';
import '../src/icon-lock.js';

export default {
  title: 'icons/IconLock',
  component: 'iz-icon-lock',
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
  <iz-icon-lock
    .size=${size}
    .color=${color}
    .rotate=${rotate}
    .width=${width}
    .height=${height}
  ></iz-icon-lock>
`;

const AllTemplate: Story<ArgTypes> = () => html`
  <h4>Regular (medium size)</h4>
  <iz-icon-lock></iz-icon-lock>

  <h4>Small</h4>
  <iz-icon-lock size="small"></iz-icon-lock>

  <h4>Large</h4>
  <iz-icon-lock size="large"></iz-icon-lock>

  <hr />

  <h4>Custom Color</h4>
  <iz-icon-lock color="red"></iz-icon-lock>

  <h4>Custom Rotation</h4>
  <iz-icon-lock rotate="60"></iz-icon-lock>
`;

export const Regular = Template.bind({});

export const All = AllTemplate.bind({});
