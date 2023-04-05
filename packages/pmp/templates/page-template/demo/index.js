import '../dist/src/page-template.js';

window.onload = () => {
  const template = document.querySelector('iz-pmp-page-template');
  template.userData = {role:"admin"}
}