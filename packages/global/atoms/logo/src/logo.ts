import { Logo } from './LogoExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-global-logo')) {
  cElements.define('iz-global-logo', Logo);
}
