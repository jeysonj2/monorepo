import { IconCog } from './IconCogExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-icon-cog')) {
  cElements.define('iz-icon-cog', IconCog);
}
