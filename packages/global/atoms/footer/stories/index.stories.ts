import { html, TemplateResult } from 'lit';
import '../src/footer.js';

export default {
  title: 'global/atoms/Footer',
  component: 'iz-global-footer',
  argTypes: {
    height: { control: 'text' },
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  height?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  height,
  backgroundColor,
}: ArgTypes) => html`
  <style>
    iz-global-footer {
      --footer-height: ${height};
      --footer-background-color: ${backgroundColor};
    }
  </style>
  <iz-global-footer></iz-global-footer>
`;

export const Regular = Template.bind({});
Regular.args = {
  height: '35px',
  backgroundColor: '#fcfcfc',
};
