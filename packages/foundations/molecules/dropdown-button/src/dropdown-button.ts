import { DropdownButton } from './DropdownButtonExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-dropdown-button')) {
  cElements.define('iz-dropdown-button', DropdownButton);
}
