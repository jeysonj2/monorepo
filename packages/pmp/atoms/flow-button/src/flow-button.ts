import { FlowButton } from './FlowButtonExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-pmp-flow-button')) {
  cElements.define('iz-pmp-flow-button', FlowButton);
}
