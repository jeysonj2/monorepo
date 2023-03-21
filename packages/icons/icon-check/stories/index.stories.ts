import { html, TemplateResult } from 'lit';
import type { Size } from '@interzero-icons/icon-base';
import '../src/icon-check.js';

export default {
  title: 'icons/IconCheck',
  component: 'iz-icon-check',
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
  <iz-icon-check
    .size=${size}
    .color=${color}
    .rotate=${rotate}
    .width=${width}
    .height=${height}
  ></iz-icon-check>
`;

const AllTemplate: Story<ArgTypes> = () => html`
  <h4>Regular (medium size)</h4>
  <iz-icon-check></iz-icon-check>

  <h4>Small</h4>
  <iz-icon-check size="small"></iz-icon-check>

  <h4>Large</h4>
  <iz-icon-check size="large"></iz-icon-check>

  <hr />

  <h4>Custom Color</h4>
  <iz-icon-check color="red"></iz-icon-check>

  <h4>Custom Rotation</h4>
  <iz-icon-check rotate="60"></iz-icon-check>
`;

export const Regular = Template.bind({});

export const All = AllTemplate.bind({});
