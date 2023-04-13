import { Accordion } from './AccordionExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-accordion')) {
  cElements.define('iz-accordion', Accordion);
}
