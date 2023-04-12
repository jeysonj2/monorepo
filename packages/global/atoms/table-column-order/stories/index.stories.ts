import { html, TemplateResult } from 'lit';
import '../src/table-column-order.js';
import { Column } from '../src/TableColumnOrderExports.js';

export default {
  title: 'TableColumnOrder',
  component: 'iz-global-table-column-order',
  argTypes: {
    open: { control: 'boolean' },
    columns: { control: 'array' },
    cssListItemPadding: { control: 'text' },
    cssCardWidth: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  open: boolean;
  columns: Column[];
  cssListItemPadding: string;
  cssCardWidth: string;
}

const Template: Story<ArgTypes> = ({
  open,
  columns,
  cssListItemPadding,
  cssCardWidth,
}: ArgTypes) => html`
  <style>
    iz-global-table-column-order {
      --tablecolumnorder-list-item-padding: ${cssListItemPadding};
      --tablecolumnorder-card-width: ${cssCardWidth};
    }
  </style>
  <iz-global-table-column-order open=${open} .columns=${columns}>
  </iz-global-table-column-order>
`;

export const Regular = Template.bind({});
Regular.args = {
  open: true,
  columns: [
    { id: '0', name: 'column 0', checked: true },
    { id: '1', name: 'column 1', checked: true },
    { id: '2', name: 'column 2', checked: true },
    { id: '3', name: 'column 3', checked: false },
    { id: '4', name: 'column 4', checked: true },
    { id: '5', name: 'column 5', checked: false },
    { id: '6', name: 'column 6', checked: true },
    { id: '7', name: 'column 7', checked: true },
    { id: '8', name: 'column 8', checked: false },
  ],
  cssCardWidth: '512px',
  cssListItemPadding: '0.5rem',
};
