import { RegisterFields } from './RegisterFieldsExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-global-register-fields')) {
  cElements.define('iz-global-register-fields', RegisterFields);
}
