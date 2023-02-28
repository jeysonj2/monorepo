import { PageTemplate } from './PageTemplateExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-pmp-page-template')) {
  cElements.define('iz-pmp-page-template', PageTemplate);
}
