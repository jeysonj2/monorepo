import '../dist/src/profile-form.js';

window.onload = () => {
  document.querySelector('iz-pmp-profile-form').onsubmit = (event) => {
    console.log(event.detail);
  }
}
