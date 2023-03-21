import { FormElement } from './FormElementExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-form-element')) {
  cElements.define('iz-form-element', FormElement);
}
