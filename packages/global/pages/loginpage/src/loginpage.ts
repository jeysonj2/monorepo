import { Loginpage } from './LoginpageExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-global-loginpage')) {
  cElements.define('iz-global-loginpage', Loginpage);
}
