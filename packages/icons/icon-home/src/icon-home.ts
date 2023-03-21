import { IconHome } from './IconHomeExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-icon-home')) {
  cElements.define('iz-icon-home', IconHome);
}
