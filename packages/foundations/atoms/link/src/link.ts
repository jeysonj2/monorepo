import { Link } from './LinkExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-link')) {
  cElements.define('iz-link', Link);
}
