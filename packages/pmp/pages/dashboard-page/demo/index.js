import '../dist/src/dashboard-page.js';

window.onload = () => {
  document.querySelector("iz-pmp-dashboard-page").addEventListener("header-change", (event) => {
    console.log(event);
  })
}
