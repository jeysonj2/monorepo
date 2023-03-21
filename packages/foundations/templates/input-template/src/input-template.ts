import { InputTemplate } from './InputTemplateExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-input-template')) {
  cElements.define('iz-input-template', InputTemplate);
}
