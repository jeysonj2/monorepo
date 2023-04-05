import { FlowContent } from './FlowContentExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-pmp-flow-content')) {
  cElements.define('iz-pmp-flow-content', FlowContent);
}
