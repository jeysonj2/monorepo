import { IconCheckoutlined } from './IconCheckoutlinedExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-icon-checkoutlined')) {
  cElements.define('iz-icon-checkoutlined', IconCheckoutlined);
}
