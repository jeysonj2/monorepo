import { Popover } from './PopoverExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-popover')) {
  cElements.define('iz-popover', Popover);
}
