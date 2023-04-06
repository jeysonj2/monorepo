import { html, TemplateResult } from 'lit';
import '../src/card.js';

export default {
  title: 'foundations/molecules/Card',
  component: 'iz-card',
  argTypes: {
    header: { control: 'boolean' },
    footer: { control: 'boolean' },
    headerTitle: { control: 'text' },
    slot: { control: 'text' },
    headerSlot: { control: 'text' },
    footerSlot: { control: 'text' },

    backgroundColor: { control: 'color' },
    padding: { control: 'text' },
    footerPadding: { control: 'text' },
    width: { control: 'text' },
    radius: { control: 'text' },
    minHeight: { control: 'text' },
    borderColor: { control: 'color' },
    borderWidth: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header: boolean;
  footer: boolean;
  headerTitle: string;
  slot?: string;
  headerSlot?: string;
  footerSlot?: string;
  backgroundColor: string;
  padding: string;
  footerPadding: string;
  width: string;
  radius: string;
  minHeight: string;
  borderColor: string;
  borderWidth: string;
}

const Template: Story<ArgTypes> = ({
  header,
  footer,
  headerTitle,
  slot,
  headerSlot,
  footerSlot,

  backgroundColor,
  padding,
  footerPadding,
  width,
  radius,
  minHeight,
  borderColor,
  borderWidth,
}: ArgTypes) => html`
  <style>
    .flex {
      display: flex;
      justify-content: center;
    } 

    iz-card {
      --card-background-color: ${backgroundColor};
      --card-radius: ${radius};
      --card-width: ${width};
      --card-padding: ${padding};
      --card-footer-padding: ${footerPadding};
      --card-min-height: ${minHeight};
      --card-border-width: ${borderWidth};
      --card-border-color: ${borderColor};
    }
  </style>
  <div class="flex">
  <iz-card
    .header=${header}
    .footer=${footer}
    .headerTitle=${headerTitle}
  >
    <div slot="header">${headerSlot}</div>
    ${slot}
    <div slot="footer">${footerSlot}</div>
  </iz-card>
  </div>
`;

export const Regular = Template.bind({});
Regular.args = {
  header: true,
  footer: true,
  slot: 'Im the content',
  headerSlot: 'Header Content',
  footerSlot: 'Footer Content',
  headerTitle: 'Card Title',

  backgroundColor: 'gray',
  radius: '1rem',
  width: '20rem',
  padding: '5rem',
  footerPadding: '2rem',
  minHeight: '10rem',
  borderColor: 'black',
  borderWidth: '4px',
}