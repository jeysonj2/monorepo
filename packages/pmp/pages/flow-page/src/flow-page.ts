import { FlowPage } from './FlowPageExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-pmp-flow-page')) {
  cElements.define('iz-pmp-flow-page', FlowPage);
}
