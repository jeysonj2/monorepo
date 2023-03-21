import { ProfileForm } from './ProfileFormExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-pmp-profile-form')) {
  cElements.define('iz-pmp-profile-form', ProfileForm);
}
