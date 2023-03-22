import "@interzero/button/wc";
import '../dist/src/popup.js';

window.onload = () => {
  window.showglobal.onclick = () => {
    window.globalpopup.show();
  }
  window.showparent.onclick = () => {
    window.parentpopup.show();
  }
}
