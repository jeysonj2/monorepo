import { html, TemplateResult } from 'lit';
import '../src/table-filter.js';
import { Column } from '../src/TableFilterExports.js';

export default {
  title: 'global/atoms/TableFilter',
  component: 'iz-global-table-filter',
  argTypes: {
    columns: { control: 'array' },
    cssGap: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  columns?: Column[];
  cssGap?: string;
}

const Template: Story<ArgTypes> = ({ columns, cssGap }: ArgTypes) => html`
  <style>
    iz-global-table-filter {
      --table-filter-gap: ${cssGap};
    }
  </style>
  <iz-global-table-filter .columns=${columns}> </iz-global-table-filter>
`;

export const Regular = Template.bind({});
Regular.args = {
  columns: [
    { name: 'Column A', id: '0' },
    { name: 'Column B', id: '1' },
    { name: 'Column C', id: '2' },
    { name: 'Column D', id: '3' },
    { name: 'Column E', id: '4' },
  ],
  cssGap: '1rem',
};
