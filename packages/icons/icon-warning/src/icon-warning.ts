import { IconWarning } from './IconWarningExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-icon-warning')) {
  cElements.define('iz-icon-warning', IconWarning);
}
