import { ListItem } from './ListItemExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-list-item')) {
  cElements.define('iz-list-item', ListItem);
}
