import { FlowOptionPopup } from './FlowOptionPopupExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-pmp-flow-option-popup')) {
  cElements.define('iz-pmp-flow-option-popup', FlowOptionPopup);
}
