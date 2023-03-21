import { IconUser } from './IconUserExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-icon-user')) {
  cElements.define('iz-icon-user', IconUser);
}
