import { TableFilterPopup } from './TableFilterPopupExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-global-table-filter-popup')) {
  cElements.define('iz-global-table-filter-popup', TableFilterPopup);
}
