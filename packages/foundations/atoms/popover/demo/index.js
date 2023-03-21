import "@interzero/button/wc";
import '../dist/src/popover.js';

let placementTarget;

window.onload = () => {
  placementTarget = document.querySelector("#placement-target");

  document.querySelectorAll("input[type=radio]").forEach(element => {
    element.addEventListener("click", (event) => {
      placementTarget.setAttribute("placement", event.target.value);
    })
  });
}
