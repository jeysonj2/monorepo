import { ButtonSwitch } from './ButtonSwitchExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-button-switch')) {
  cElements.define('iz-button-switch', ButtonSwitch);
}
