import { IconClose } from './IconCloseExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-icon-close')) {
  cElements.define('iz-icon-close', IconClose);
}
