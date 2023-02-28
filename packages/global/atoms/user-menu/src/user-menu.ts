import { UserMenu } from './UserMenuExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-global-user-menu')) {
  cElements.define('iz-global-user-menu', UserMenu);
}
