import { LanguageSelect } from './LanguageSelectExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-global-language-select')) {
  cElements.define('iz-global-language-select', LanguageSelect);
}
