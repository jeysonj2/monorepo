import { MenuButton } from './MenuButtonExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-menu-button')) {
  cElements.define('iz-menu-button', MenuButton);
}
