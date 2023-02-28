# @interzero-tools/translate

This is a simple solution to deal with translations. The translations exists on the global window object and is initialized with the object called `"izTranslation"`

It works by translating what it finds. So not all stuff needs always translation e.g. "Hello" in the english is good as it is (meaning it would default to its "key" which is "Hello" in this case).

It is being initialized by the following code:
```
window.izTranslation = window.izTranslation || {};
window.izTranslation.load = window.izTranslation.load || load; 
window.izTranslation.subscribe = window.izTranslation.subscribe || subscribe;
window.izTranslation.unsubscribe = window.izTranslation.unsubscribe || unsubscribe;
window.izTranslation.translations = window.izTranslation.translations || {};
```

This allows the translation object to subscribe & unsubscribe with ease. The project using the web-componets can then simply load a new translations with this function:
```
export function load (languageId:string, data:TranslationObject) {
  if (!data || typeof data !== "object") throw new Error("you have to load a translation-data object<string,string>")
  
  window.izTranslation.languageId = languageId;
  window.izTranslation.translations = data;
  window.dispatchEvent(new Event(TRANSLATION_CHANGE_EVENTNAME));
}
```

As we can see it requires two parameters:
| name | type |
|--------|------|
| `"languageId"` | string |
| `"data"` | TranslationObject |


Where `"TranslationObject"` is:
```
type TranslationObject = Record<string, string>
```

## Installation

```bash
npm i @interzero-tools/translate
```

## Usage

```html
<script type="module">
  import '@interzero-tools/translate/wc';
</script>

<iz-translate></iz-translate>
```

## How to use variables 


## How to load a new language 
```
const en = {
  "Hello": "",
  "translated demo test 2": "translated demo test 2 BLABLA",
}
const se = {
  "translated demo test": "[SE] translated demo test BLABLA",
  "translated demo test 2": "[SE] translated demo test 2 BLABLA",
}

// load english 
window.izTranslation.load("en", en);

// switch to swedish
window.izTranslation.load("se", se);
```


# Generated Report:
This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
