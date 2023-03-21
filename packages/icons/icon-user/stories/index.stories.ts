import { html, TemplateResult } from 'lit';
import type { Size } from '@interzero-icons/icon-base';
import '../src/icon-user.js';

export default {
  title: 'icons/IconUser',
  component: 'iz-icon-user',
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
  <iz-icon-user
    .size=${size}
    .color=${color}
    .rotate=${rotate}
    .width=${width}
    .height=${height}
  ></iz-icon-user>
`;

const AllTemplate: Story<ArgTypes> = () => html`
  <h4>Regular (medium size)</h4>
  <iz-icon-user></iz-icon-user>

  <h4>Small</h4>
  <iz-icon-user size="small"></iz-icon-user>

  <h4>Large</h4>
  <iz-icon-user size="large"></iz-icon-user>

  <hr />

  <h4>Custom Color</h4>
  <iz-icon-user color="red"></iz-icon-user>

  <h4>Custom Rotation</h4>
  <iz-icon-user rotate="60"></iz-icon-user>
`;

export const Regular = Template.bind({});

export const All = AllTemplate.bind({});
