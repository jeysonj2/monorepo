import { html, TemplateResult } from 'lit';
import type { Size } from '@interzero-icons/icon-base';
import '../src/icon-warning.js';

export default {
  title: 'icons/IconWarning',
  component: 'iz-icon-warning',
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
  <iz-icon-warning
    .size=${size}
    .color=${color}
    .rotate=${rotate}
    .width=${width}
    .height=${height}
  ></iz-icon-warning>
`;

const AllTemplate: Story<ArgTypes> = () => html`
  <h4>Regular (medium size)</h4>
  <iz-icon-warning></iz-icon-warning>

  <h4>Small</h4>
  <iz-icon-warning size="small"></iz-icon-warning>

  <h4>Large</h4>
  <iz-icon-warning size="large"></iz-icon-warning>

  <hr />

  <h4>Custom Color</h4>
  <iz-icon-warning color="red"></iz-icon-warning>

  <h4>Custom Rotation</h4>
  <iz-icon-warning rotate="60"></iz-icon-warning>
`;

export const Regular = Template.bind({});

export const All = AllTemplate.bind({});
