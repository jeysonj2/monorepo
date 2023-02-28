import { UserProfile } from './UserProfileExports.js';

// Register the element with the browser
const cElements = customElements ?? window?.customElements;

if (!cElements) {
  throw new Error('Custom Elements not supported');
}

if (!cElements.get('iz-pmp-user-profile')) {
  cElements.define('iz-pmp-user-profile', UserProfile);
}
