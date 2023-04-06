import { html, TemplateResult } from 'lit';
import '../src/logo.js';
import { Size } from '../src/LogoExports.js';

export default {
  title: 'global/atoms/Logo',
  component: 'iz-global-logo',
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    // style related
    cssWidth: { control: 'text' },
    cssHeight: { control: 'text' },
    cssSizePercentage: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  size: Size;
  // style related
  cssWidth: string;
  cssHeight: string;
  cssSizePercentage: string;
}

const Template: Story<ArgTypes> = ({
  size,
  // style related
  cssWidth,
  cssHeight,
  cssSizePercentage,
}: ArgTypes) => html`
  <style>
    iz-global-logo {
      --logo-size-width: ${cssWidth};
      --logo-size-height: ${cssHeight};
      --logo-size-percentage: ${cssSizePercentage};
    }
  </style>
  <iz-global-logo size=${size}> </iz-global-logo>
`;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  cssWidth: '176px',
  cssHeight: '65px',
  cssSizePercentage: '1',
};

export const Medium = Template.bind({});
Medium.args = {
  ...Small.args,
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  ...Small.args,
  size: 'large',
};
