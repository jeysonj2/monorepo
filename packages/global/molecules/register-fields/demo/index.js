import '../dist/src/register-fields.js';

window.onload = () => {
  const fields = document.querySelector("iz-global-register-fields");
  fields.addEventListener("login", event => {
    alert("clicked on login");
  });
}
