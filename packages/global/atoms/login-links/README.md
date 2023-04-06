# @interzero-global/login-links

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"contactLink"` | `string` | "https://www.interzero.de/kontakt/" | `false` | controls the link of the contact page of interzero |
| `"interzeroLink"` | `string` | "https://www.interzero.de/" | `false` | controls the link of the homepage of interzero |

## Events
--

## CSS variables
--
## Types
--

## Translations
| key | description |
|-----|-------------|
| "INTERZERO" | used for the interzero homepage |
| "KONTAKT" | used for the interzero contact page |
| "© 2022 - Interzero Circular Solutions Germany GmbH" trademark text |


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero-global/login-links
```

## Usage

```html
<script type="module">
  import '@interzero-global/login-links/wc';
</script>

<iz-global-login-links></iz-global-login-links>
```

## Translations

| key | component | use-case |
|-----|-----------|----------|
| `"INTERZERO"` | LoginLinks | link text for interzero official website |
| `"KONTAKT"` | LoginLinks | link text for interzero contact page |
| `"© 2022 - Interzero Circular Solutions Germany GmbH"` | LoginLinks | trademark text |

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
