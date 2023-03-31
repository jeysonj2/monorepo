import '../dist/src/flow-option-popup.js';

window.onload = () => {
  window.add.onclick = () => {
    window.addpopup.show();
  }
  window.editpopup.data = {
    id:"id",
    value:"value",
    priceAffection: 10,
    priceAffectionType: "addition",
  }

  window.edit.onclick = () => {
    window.editpopup.show();
  }
};
