import '../dist/src/table-header.js';

window.onload = () => {
  window.regular.columns = [
    { id: '0', value: 'Column 0', },
    { id: '1', value: 'Column 1', },
    { id: '2', value: 'Column 2', },
    { id: '3', value: 'Column 3', },
    { id: '4', value: 'Column 4', },
    { id: '5', value: 'Column 5', },
  ];

  window.sortable.columns = [
    { id: '0', value: 'Column 0', sortable: true, },
    { id: '1', value: 'Column 1', sortable: true, },
    { id: '2', value: 'Column 2', sortable: true, },
    { id: '3', value: 'Column 3', sortable: true, },
    { id: '4', value: 'Column 4', sortable: true, },
    { id: '5', value: 'Column 5', sortable: true, },
  ];

  window.searchable.columns = [
    { id: '0', value: 'Column 0', searchable: true, },
    { id: '1', value: 'Column 1', searchable: true, },
    { id: '2', value: 'Column 2', searchable: true, },
    { id: '3', value: 'Column 3', searchable: true, },
    { id: '4', value: 'Column 4', searchable: true, },
    { id: '5', value: 'Column 5', searchable: true, },
  ];

  window.full.columns = [
    { id: '0', value: 'Column 0', sortable: true, searchable: true, },
    { id: '1', value: 'Column 1', sortable: true, searchable: true, },
    { id: '2', value: 'Column 2', sortable: true, searchable: true, },
    { id: '3', value: 'Column 3', sortable: true, searchable: true, },
    { id: '4', value: 'Column 4', sortable: true, searchable: true, },
    { id: '5', value: 'Column 5', sortable: true, searchable: true, },
  ];

  window.random.columns = [
    { id: '0', value: 'Column 0', sortable: false, searchable: true, },
    { id: '1', value: 'Column 1', sortable: true, searchable: false, },
    { id: '2', value: 'Column 2', sortable: true, searchable: true, },
    { id: '3', value: 'Column 3', sortable: false, searchable: false, },
    { id: '4', value: 'Column 4', sortable: false, searchable: true, },
    { id: '5', value: 'Column 5', sortable: true, searchable: false, },
  ];
};
