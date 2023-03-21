import { Badge } from './BadgeExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-badge')) {
  cElements.define('iz-badge', Badge);
}
