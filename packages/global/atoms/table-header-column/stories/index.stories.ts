import { html, TemplateResult } from 'lit';
import '../src/table-header-column.js';

export default {
  title: 'TableHeaderColumn',
  component: 'iz-global-table-header-column',
  argTypes: {
    searchable: { control: 'boolean' },
    sortable: { control: 'boolean' },
    content: { control: 'text' },
    // style related
    padding: { control: 'text' },
    iconColor: { control: 'color' },
    iconSelectedColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

type StyleArgs = {
  padding: string;
  iconColor: string;
  iconSelectedColor: string;
}
type ArgTypes = StyleArgs & {
  searchable: boolean;
  sortable: boolean;
  content: string;
}

const Template: Story<ArgTypes> = ({
  searchable,
  sortable,
  content,
  // style related
  padding,
  iconColor,
  iconSelectedColor,
}: ArgTypes) => html`
  <style>
    iz-global-table-header-column {
      --tableheadercolumn-button-padding: ${padding};
      --tableheadercolumn-sort-color: ${iconColor};
      --tableheadercolumn-sort-color-selected: ${iconSelectedColor};
    }
  </style>
  <iz-global-table-header-column
    ?sortable=${sortable}
    ?searchable=${searchable}
  >
    ${content}
  </iz-global-table-header-column>
`;
const AllTemplate: Story<StyleArgs> = ({
  padding,
  iconColor,
  iconSelectedColor,
}: StyleArgs) => html`
  <style>
    iz-global-table-header-column {
      --tableheadercolumn-button-padding: ${padding};
      --tableheadercolumn-sort-color: ${iconColor};
      --tableheadercolumn-sort-color-selected: ${iconSelectedColor};
    }
  </style>
  <fieldset>
    <legend>Regular</legend>
    <iz-global-table-header-column>Column Header</iz-global-table-header-column>
  </fieldset>

  <fieldset>
    <legend>Sortable</legend>
    <iz-global-table-header-column sortable="true">Column Header</iz-global-table-header-column>
  </fieldset>

  <fieldset>
    <legend>Searchable</legend>
    <iz-global-table-header-column searchable="true">Column Header</iz-global-table-header-column>
  </fieldset>

  <fieldset>
    <legend>Full</legend>
    <iz-global-table-header-column sortable="true" searchable="true">Column Header</iz-global-table-header-column>
  </fieldset>
`;

export const Regular = Template.bind({});
Regular.args = {
  sortable: true,
  searchable: true,
  padding: '4px',
  content: 'Column',
  iconColor: 'grey',
  iconSelectedColor: 'black',
}

export const All = AllTemplate.bind({});
All.args = {
  padding: '4px',
  iconColor: 'grey',
  iconSelectedColor: 'black',
}
