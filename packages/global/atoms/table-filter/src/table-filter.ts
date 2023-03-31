import { TableFilter } from './TableFilterExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-global-table-filter')) {
  cElements.define('iz-global-table-filter', TableFilter);
}
