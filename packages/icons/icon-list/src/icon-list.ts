import { IconList } from './IconListExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-icon-list')) {
  cElements.define('iz-icon-list', IconList);
}
