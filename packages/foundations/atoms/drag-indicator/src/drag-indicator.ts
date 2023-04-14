import { DragIndicator } from './DragIndicatorExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-drag-indicator')) {
  cElements.define('iz-drag-indicator', DragIndicator);
}
