import "@interzero/option/wc";
import '../dist/src/dropdown.js';

window.onload = () => {
  window.loadbtn.onclick = () => {
    const itema = document.createElement("iz-option");
    itema.value = "a";
    itema.innerText = "item a";

    const itemb = document.createElement("iz-option");
    itemb.value = "b";
    itemb.innerText = "item b";

    const itemc = document.createElement("iz-option");
    itemc.value = "c";
    itemc.innerText = "item c";

    window.load.appendChild(itema);
    window.load.appendChild(itemb);
    window.load.appendChild(itemc);
  }
}
