export type TranslationObject = Record<string, string>;
export const TRANSLATION_CHANGE_EVENTNAME = 'iz-translation-change';
export const TRANSLATION_ADDED = 'iz-translation-added';
type EventCallback = (event: Event) => void;

export interface LanguageSet {
  id: string;
  name: string;
  flag?: string;
  translations: TranslationObject;
}
export interface Translation {
  subscribe(callback: EventCallback): void;
  unsubscribe(callback: EventCallback): void;
  load(set: LanguageSet): void;
  loadAll(array: LanguageSet[]): void;
  change(id: string): void;

  map: Map<string, LanguageSet>;
  current: LanguageSet;
}

declare global {
  interface Window {
    izTranslation: Translation;
  }
}

export function load(set: LanguageSet) {
  if (!set.translations || typeof set.translations !== 'object')
    throw new Error(
      'you have to load a translation-data object<string,string>'
    );

  window.izTranslation.map.set(set.id, set); // would override
  window.izTranslation.change(set.id);
  window.dispatchEvent(new Event(TRANSLATION_ADDED));
}
export function change(id: string) {
  const set = window.izTranslation.map.get(id);
  if (!set)
    throw new Error(`Could not find language set based on id provided: ${id}`);

  window.izTranslation.current = set;
  window.dispatchEvent(new Event(TRANSLATION_CHANGE_EVENTNAME));
}
export function loadAll(array: LanguageSet[]) {
  try {
    array.forEach(set => window.izTranslation.map.set(set.id, set));
    window.dispatchEvent(new Event(TRANSLATION_ADDED));
  } catch (e) {
    console.error('error is here', e);
  }
}
export function subscribe(callback: EventCallback) {
  window.addEventListener(TRANSLATION_CHANGE_EVENTNAME, callback);
}
export function unsubscribe(callback: EventCallback) {
  window.removeEventListener(TRANSLATION_CHANGE_EVENTNAME, callback);
}

window.izTranslation = window.izTranslation || {};
window.izTranslation.load = window.izTranslation.load || load;
window.izTranslation.change = window.izTranslation.change || change;
window.izTranslation.loadAll = window.izTranslation.loadAll || loadAll;
window.izTranslation.subscribe = window.izTranslation.subscribe || subscribe;
window.izTranslation.unsubscribe =
  window.izTranslation.unsubscribe || unsubscribe;
window.izTranslation.current = window.izTranslation.current || {};
window.izTranslation.map = window.izTranslation.map || new Map();
