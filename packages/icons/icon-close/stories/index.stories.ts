import { html, TemplateResult } from 'lit';
import type { Size } from '@interzero-icons/icon-base';
import '../src/icon-close.js';

export default {
  title: 'icons/IconClose',
  component: 'iz-icon-close',
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
  <iz-icon-close
    .size=${size}
    .color=${color}
    .rotate=${rotate}
    .width=${width}
    .height=${height}
  ></iz-icon-close>
`;

const AllTemplate: Story<ArgTypes> = () => html`
  <h4>Regular (medium size)</h4>
  <iz-icon-close></iz-icon-close>

  <h4>Small</h4>
  <iz-icon-close size="small"></iz-icon-close>

  <h4>Large</h4>
  <iz-icon-close size="large"></iz-icon-close>

  <hr />

  <h4>Custom Color</h4>
  <iz-icon-close color="red"></iz-icon-close>

  <h4>Custom Rotation</h4>
  <iz-icon-close rotate="60"></iz-icon-close>
`;

export const Regular = Template.bind({});

export const All = AllTemplate.bind({});
