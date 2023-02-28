import { IconCaret } from './IconCaretExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-icon-caret')) {
  cElements.define('iz-icon-caret', IconCaret);
}
