import "@interzero-tools/translate/wc";
import '../dist/src/language-select.js';

const translations = [
  {
    id: "en",
    name: "english",
    flag: '🇬🇧',
    translations: {}
  },
  {
    id: "se",
    name: "swedish",
    flag: '🇸🇪',
    translations: {
      "Hello World": "[SE] Hello World",
      "Hello Fantastic World": "[SE] Hello Fantastic World",
      "Hello Interzero": "[SE] Hello Interzero",
      "I like potatoes": "[SE] I like potatoes",
      "select language": "[SE] select language",
    }
  },
  {
    id: "es",
    name: "spanish",
    flag: '🇪🇸',
    translations: {
      "Hello World": "[ES] Hello World",
      "Hello Fantastic World": "[ES] Hello Fantastic World",
      "Hello Interzero": "[ES] Hello Interzero",
      "I like potatoes": "[ES] I like potatoes",
      "select language": "[ES] select language",
    }
  },
  {
    id: "de",
    name: "german",
    flag: '🇩🇪',
    translations: {
      "Hello World": "[DE] Hello World",
      "Hello Fantastic World": "[DE] Hello Fantastic World",
      "Hello Interzero": "[DE] Hello Interzero",
      "I like potatoes": "[DE] I like potatoes",
      "select language": "[DE] select language",
    }
  }
]

window.izTranslation.loadAll(translations);
window.izTranslation.change("en");
