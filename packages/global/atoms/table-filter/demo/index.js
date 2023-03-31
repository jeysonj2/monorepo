import '../dist/src/table-filter.js';

window.onload = () => {
  document.querySelectorAll('iz-global-table-filter').forEach(element => {
    element.columns = [
      { name: 'Column A', id: '0' },
      { name: 'Column B', id: '1' },
      { name: 'Column C', id: '2' },
      { name: 'Column D', id: '3' },
      { name: 'Column E', id: '4' },
    ];

    if (element.hasAttribute('with-data'))
    {
      element.data = {
        column: '3',
        filter: 'begins-with',
        value: 'value'
      }
    }
  })
};
