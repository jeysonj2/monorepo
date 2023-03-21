import { DashboardPage } from './DashboardPageExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-pmp-dashboard-page')) {
  cElements.define('iz-pmp-dashboard-page', DashboardPage);
}
