import { Translate } from './TranslateExports.js';
import './window.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-translate')) {
  cElements.define('iz-translate', Translate);
}
