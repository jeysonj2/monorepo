import { html, TemplateResult } from 'lit';
import '../src/accordion.js';

export default {
  title: 'Accordion',
  component: 'iz-accordion',
  argTypes: {
    direction: { control: 'select', options: ['up', 'down'] },
    expandMode: { control: 'select', options: ['partial', 'full'] },
    open: { control: 'boolean' },
    // style
    paddingHeader: { control: 'text' },
    paddingMain: { control: 'text' },
    // slot
    slotTitle: { control: 'text' },
    slotContent: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  direction: string;
  expandMode: string;
  open: boolean;
  // style
  paddingHeader: string;
  paddingMain: string;
  // slot
  slotTitle: string;
  slotContent: string;
}

const Template: Story<ArgTypes> = ({
  direction,
  expandMode,
  open,
  // style
  paddingHeader,
  paddingMain,
  // slot
  slotTitle,
  slotContent,
}: ArgTypes) => html`
  <style>
    iz-accordion {
      --accordion-padding-header: ${paddingHeader};
      --accordion-padding-main: ${paddingMain};
    }
  </style>
  <iz-accordion .open=${open} .direction=${direction} .expandMode=${expandMode}>
    <p slot="title">${slotTitle}</p>

    <p>${slotContent}</p>
    <p>${slotContent}</p>
    <p>${slotContent}</p>
    <p>${slotContent}</p>
    <p>${slotContent}</p>
    <p>${slotContent}</p>
    <p>${slotContent}</p>
    <p>${slotContent}</p>
  </iz-accordion>
`;

export const Regular = Template.bind({});
Regular.args = {
  direction: 'down',
  expandMode: 'partial',
  open: true,
  // style
  paddingHeader: '0',
  paddingMain: '1rem',
  // slot
  slotTitle: 'Accordion Title',
  slotContent: 'Accordion Body',
};
