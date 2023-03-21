import { Field } from './FieldExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-field')) {
  cElements.define('iz-field', Field);
}
