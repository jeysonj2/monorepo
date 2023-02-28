import {change,loadAll,load,subscribe,unsubscribe} from '../src/window.js';

export function Nullify () {
  window.izTranslation = null;
}

export function Reset() {
  window.izTranslation = {};
  window.izTranslation.load = load;
  window.izTranslation.change = change;
  window.izTranslation.loadAll = loadAll;
  window.izTranslation.subscribe = subscribe;
  window.izTranslation.unsubscribe = unsubscribe;
  window.izTranslation.current = {};
  window.izTranslation.map = new Map();
}

export function AssignWrong () {
  try {
    window.izTranslation.load(null);
    return true;
  }
  catch {
    return false;
  }
}
