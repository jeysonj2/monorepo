import { IconCheck } from './IconCheckExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-icon-check')) {
  cElements.define('iz-icon-check', IconCheck);
}
