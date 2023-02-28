import "@interzero/typography/wc";
import '../dist/src/translate.js';

const translations = [
  {
    id: "en",
    name: "english",
    translations: {
      "translated demo test": "translated demo test BLABLA",
      "translated demo test 2": "translated demo test 2 BLABLA",
      "Im Text": "[EN] Im Text",
      "Im updated Text": "[EN] Im updated Text",
      "Variable {name} Text": "[EN] Variable {name} Text",
      "Variable Text {name}": "[EN] Variable Text {name}"
    }
  },
  {
    id: "se",
    name: "swedish",
    translations: {
      "translated demo test": "[SE] translated demo test BLABLA",
      "translated demo test 2": "[SE] translated demo test 2 BLABLA",
      "Im Text": "[SE] Im Text",
      "Im updated Text": "[SE] Im updated Text",
      "Variable {name} Text": "Min lärare hette {name} i förnamn!",
      "Variable Text {name}": "Och {name} i efternamn!!"
    }
  }
]

const opposites = {
  se: "en",
  en: "se",
};

window.izTranslation.loadAll(translations);
window.izTranslation.change("en");

window.onload = () => {
  document.querySelector("button:not(#updatekey)").onclick = () => {
    let id = opposites[window.izTranslation.current.id];
    window.izTranslation.change(id);
  }

  window.updateinnerhtml.onclick = () => {
    if (window.target.Key === "Im Text")
    {
      window.target.innerHTML = "Im updated Text";
    }
    else window.target.innerHTML = "Im Text"
  }
  window.updateinnertext.onclick = () => {
    if (window.target.Key === "Im Text")
    {
      window.target.innerText = "Im updated Text";
    }
    else window.target.innerText = "Im Text"
  }

  window.nullifybtn.onclick = () => {
    window.nullify.innerHTML = null;
  }
  window.undefinifybtn.onclick = () => {
    window.undefinify.innerHTML = undefined;
  }
}
