import { LoginForm } from './LoginFormExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-global-login-form')) {
  cElements.define('iz-global-login-form', LoginForm);
}
