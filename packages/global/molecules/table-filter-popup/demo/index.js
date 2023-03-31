import '../dist/src/table-filter-popup.js';

window.onload = () => {
  const element = document.querySelector('iz-global-table-filter-popup');
  element.columns = [
    { name: 'Column A', id: '0' },
    { name: 'Column B', id: '1' },
    { name: 'Column C', id: '2' },
    { name: 'Column D', id: '3' },
    { name: 'Column E', id: '4' },
  ];
  element.filters = [{column: '0', filter: 'begins-with', value: 'Bånge'}]
  element.addEventListener('save', e => console.log('save', e.detail));

  window.button.onclick = () => {
    // console.log(element);
    element.show();
  }
};
