import { IconError } from './IconErrorExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-icon-error')) {
  cElements.define('iz-icon-error', IconError);
}
