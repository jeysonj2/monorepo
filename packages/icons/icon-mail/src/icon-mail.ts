import { IconMail } from './IconMailExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-icon-mail')) {
  cElements.define('iz-icon-mail', IconMail);
}
