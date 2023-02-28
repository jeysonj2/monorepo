import { html, TemplateResult } from 'lit';
import type { Size } from '@interzero-icons/icon-base';
import '../src/icon-caret.js';

export default {
  title: 'icons/IconCaret',
  component: 'iz-icon-caret',
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
  <iz-icon-caret
    .size=${size}
    .color=${color}
    .rotate=${rotate}
    .width=${width}
    .height=${height}
  ></iz-icon-caret>
`;

const AllTemplate: Story<ArgTypes> = () => html`
  <h4>Regular (medium size)</h4>
  <iz-icon-caret></iz-icon-caret>

  <h4>Small</h4>
  <iz-icon-caret size="small"></iz-icon-caret>

  <h4>Large</h4>
  <iz-icon-caret size="large"></iz-icon-caret>

  <hr />

  <h4>Custom Color</h4>
  <iz-icon-caret color="red"></iz-icon-caret>

  <h4>Custom Rotation</h4>
  <iz-icon-caret rotate="60"></iz-icon-caret>
`;

export const Regular = Template.bind({});

export const All = AllTemplate.bind({});
