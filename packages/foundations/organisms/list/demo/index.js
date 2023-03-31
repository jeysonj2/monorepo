import '@interzero/list-item/wc';
import '../dist/src/list.js';

window.onload = () => {
  document.querySelectorAll("iz-list").forEach(list => {
    list.addEventListener('item-remove', event => console.log("item remove", event))
  })
};
