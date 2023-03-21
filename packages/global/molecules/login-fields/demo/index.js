import '../dist/src/login-fields.js';
import {DefaultTranslations} from '../dist/src/index';

window.onload = () => {
  const fields = document.querySelector("iz-global-login-fields");

  fields.translations = {
    ...DefaultTranslations,
    emailLabel: "Email Label Custom"
  }

  fields.addEventListener("register", event => {
    alert("clicked on register");
  });
}
