import '../dist/src/user-menu.js';

window.onload = () => {
  document.querySelector("iz-global-user-menu").onchange = (event) => {
    console.log("event", event);
  };
};
