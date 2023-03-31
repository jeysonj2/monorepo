import { FlowView } from './FlowViewExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-pmp-flow-view')) {
  cElements.define('iz-pmp-flow-view', FlowView);
}
