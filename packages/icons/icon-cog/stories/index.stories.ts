import { html, TemplateResult } from 'lit';
import type { Size } from '@interzero-icons/icon-base';
import '../src/icon-cog.js';

export default {
  title: 'icons/IconCog',
  component: 'iz-icon-cog',
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
  <iz-icon-cog
    .size=${size}
    .color=${color}
    .rotate=${rotate}
    .width=${width}
    .height=${height}
  ></iz-icon-cog>
`;

const AllTemplate: Story<ArgTypes> = () => html`
  <h4>Regular (medium size)</h4>
  <iz-icon-cog></iz-icon-cog>

  <h4>Small</h4>
  <iz-icon-cog size="small"></iz-icon-cog>

  <h4>Large</h4>
  <iz-icon-cog size="large"></iz-icon-cog>

  <hr />

  <h4>Custom Color</h4>
  <iz-icon-cog color="red"></iz-icon-cog>

  <h4>Custom Rotation</h4>
  <iz-icon-cog rotate="60"></iz-icon-cog>
`;

export const Regular = Template.bind({});

export const All = AllTemplate.bind({});
