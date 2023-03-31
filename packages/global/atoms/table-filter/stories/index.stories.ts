import { html, TemplateResult } from 'lit';
import '../src/table-filter.js';
import { Column, Data } from '../src/TableFilterExports.js';

export default {
  title: 'global/atoms/TableFilter',
  component: 'iz-global-table-filter',
  argTypes: {
    columns: { control: 'array' },
    data: { control: 'object' },  
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
  data?: Data;
  cssGap?: string;
}

const Template: Story<ArgTypes> = ({ columns, data, cssGap }: ArgTypes) => html`
  <style>
    iz-global-table-filter {
      --table-filter-gap: ${cssGap};
    }
  </style>
  <iz-global-table-filter .data=${data} .columns=${columns}> </iz-global-table-filter>
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

export const Existing = Template.bind({});
Existing.args = {
  ...Regular.args,
  data: {
    column: '0',
    value: 'hello',
    filter: 'in-between'
  }
}