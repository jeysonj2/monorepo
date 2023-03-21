import { IconLock } from './IconLockExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-icon-lock')) {
  cElements.define('iz-icon-lock', IconLock);
}
