import { FieldPassword } from './FieldPasswordExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-global-field-password')) {
  cElements.define('iz-global-field-password', FieldPassword);
}
