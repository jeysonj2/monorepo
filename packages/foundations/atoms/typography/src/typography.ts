import { Typography } from './TypographyExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-typography')) {
  cElements.define('iz-typography', Typography);
}
