import type { Size } from '@interzero/button';
import { html, TemplateResult } from 'lit';
import '../src/list-item.js';

export default {
  title: 'foundations/molecules/ListItem',
  component: 'iz-list-item',
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    isDeletable: { control: 'boolean' },
    isDraggable: { control: 'boolean' },
    dragged: { control: 'boolean' },
    slot: { control: 'text' },
    // style related
    backgroundColor: { control: 'color' },
    iconMargin: { control: 'text' },
    padding: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  size: Size;
  isDeletable: boolean;
  isDraggable: boolean;
  dragged: boolean;
  backgroundColor?: string;
  padding?: string;
  iconMargin?: string;
  slot?: string;
}

const Template: Story<ArgTypes> = ({
  size,
  isDeletable,
  isDraggable,
  backgroundColor,
  padding,
  dragged,
  iconMargin,
  slot,
}: ArgTypes) => html`
  <style>
    iz-list-item {
      --list-item-background-color: ${backgroundColor};
      --list-item-list-icon-margin: ${iconMargin};
      --list-item-padding: ${padding};
    }
  </style>
  <iz-list-item
    size=${size}
    .isDeletable=${isDeletable}
    .isDraggable=${isDraggable}
    .dragged=${dragged}
  >
    ${slot}
  </iz-list-item>
`;

const AllTemplate: Story<ArgTypes> = () => html`
  <fieldset>
    <legend>Default</legend>
    <iz-list-item size="small"> small </iz-list-item>
    <br />
    <iz-list-item size="medium"> medium </iz-list-item>
    <br />
    <iz-list-item size="large"> large </iz-list-item>
  </fieldset>
  <fieldset>
    <legend>Dragged</legend>
    <iz-list-item size="small" ?dragged=${true}> small </iz-list-item>
    <br />
    <iz-list-item size="medium" ?dragged=${true}> medium </iz-list-item>
    <br />
    <iz-list-item size="large" ?dragged=${true}> large </iz-list-item>
  </fieldset>
`;

export const Regular = Template.bind({});
Regular.args = {
  size: 'medium',
  isDeletable: true,
  isDraggable: true,
  backgroundColor: 'white',
  padding: '0.5rem',
  iconMargin: '0.5rem',
  slot: 'List-Item',
  dragged: false, // FIXME should be controlled within actually
};

export const All = AllTemplate.bind({});
