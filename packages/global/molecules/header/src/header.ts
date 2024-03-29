import { Header } from './HeaderExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-global-header')) {
  cElements.define('iz-global-header', Header);
}
