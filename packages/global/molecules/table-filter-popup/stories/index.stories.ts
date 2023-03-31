import { html, TemplateResult } from 'lit';
import '../src/table-filter-popup.js';
import type { Filter, Column } from '../src/TableFilterPopupExports.js';

export default {
  title: 'TableFilterPopup',
  component: 'iz-global-table-filter-popup',
  argTypes: {
    open: { control: 'boolean' },
    columns: { control: 'array' },
    filters: { control: 'array' },
    cssCardWidth: { control: 'text' },
    cssListGap: { control: 'text' },
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
  filters: Partial<Filter>[];
  cssCardWidth: string;
  cssListGap: string;
}

const Template: Story<ArgTypes> = ({
  open,
  filters,
  columns,
  cssCardWidth,
  cssListGap,
}: ArgTypes) => html`
  <style>
    iz-global-table-filter-popup {
      --tablefilterpopup-card-width: ${cssCardWidth};
      --tablefilterpopup-list-gap: ${cssListGap};
    }
  </style>
  <iz-global-table-filter-popup
    ?open=${open}
    .filters=${filters}
    .columns=${columns}
  >
  </iz-global-table-filter-popup>
`;

export const Regular = Template.bind({});
Regular.args = {
  open: true,
  filters: [],
  columns: [
    { name: 'Column A', id: '0' },
    { name: 'Column B', id: '1' },
    { name: 'Column C', id: '2' },
    { name: 'Column D', id: '3' },
    { name: 'Column E', id: '4' },
  ],
  cssCardWidth: '512px',
  cssListGap: '0.6rem',
};

export const WithValues = Template.bind({});
WithValues.args = {
  ...Regular.args,
  filters: [{ column: '0', filter: 'begins-with', value: 'Bånge' }],
};
