import { IconArrow } from './IconArrowExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-icon-arrow')) {
  cElements.define('iz-icon-arrow', IconArrow);
}
