import '../dist/src/table-header-column.js';

window.onload = () => {
  document.querySelectorAll('iz-global-table-header-column').forEach(element => {
    element.addEventListener('sort', e => console.log(e.detail));
    element.addEventListener('search', e => console.log(e.detail));
  })
};
