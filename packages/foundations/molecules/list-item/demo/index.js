import '../dist/src/list-item.js';

window.onload = () => {
  document.querySelectorAll('iz-list-item').forEach(element => {
    element.addEventListener("remove", e => console.log("REMOVE", e.target));
  });
};
