import { FlowRoadmap } from './FlowRoadmapExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-pmp-flow-roadmap')) {
  cElements.define('iz-pmp-flow-roadmap', FlowRoadmap);
}
