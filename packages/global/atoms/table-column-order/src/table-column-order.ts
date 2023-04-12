import { TableColumnOrder } from './TableColumnOrderExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-global-table-column-order')) {
  cElements.define('iz-global-table-column-order', TableColumnOrder);
}
