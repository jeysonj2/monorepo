import '../dist/src/table-column-order.js';

window.onload = () => {
  const element = document.querySelector('iz-global-table-column-order');
  window.button.onclick = () => {
    element.show();
  }

  element.columns = [
    { id: '0', name: 'column 0', checked: true },
    { id: '1', name: 'column 1', checked: true },
    { id: '2', name: 'column 2', checked: true },
    { id: '3', name: 'column 3', checked: false },
    { id: '4', name: 'column 4', checked: true },
    { id: '5', name: 'column 5', checked: false },
    { id: '6', name: 'column 6', checked: true },
    { id: '7', name: 'column 7', checked: true },
    { id: '8', name: 'column 8', checked: false },
  ]

  element.addEventListener('save', event => console.log(event.detail));
};
