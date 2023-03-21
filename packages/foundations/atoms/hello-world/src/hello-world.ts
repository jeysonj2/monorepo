import { HelloWorld } from './HelloWorldExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-hello-world')) {
  cElements.define('iz-hello-world', HelloWorld);
}
