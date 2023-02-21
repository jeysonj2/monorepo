import { html, TemplateResult } from 'lit';
import '../src/izwc-hello-world.js';

export default {
  title: 'IzwcHelloWorld',
  component: 'izwc-hello-world',
  argTypes: {
    message: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  message?: string;
  counter?: number;
  textColor?: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  message = 'Hello world',
  counter = 5,
  textColor,
  slot,
}: ArgTypes) => html`
  <izwc-hello-world
    style="--izwc-hello-world-text-color: ${textColor || 'black'}"
    .message=${message}
    .counter=${counter}
  >
    ${slot}
  </izwc-hello-world>
`;

export const Regular = Template.bind({});

export const CustomMessage = Template.bind({});
CustomMessage.args = {
  message: 'My message',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
