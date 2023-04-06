# @interzero/card

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"header"` | `boolean` | `false` | `false` | sets if header is present in the card |
| `"footer"` | `boolean` | `false` | `false` | sets if footer is present in the card |
| `"headerTitle"` | `string` | `"Title"` | `false` | sets the card header |

## Events
| name | type | description |
|------|------|-------------|

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--card-background-color"` | `Color` | var(--colors-neutral-white, white) | controls the background color |
| `"--card-radius"` | `CSS unit` | `0.5rem` | controls the card border-radius |
| `"--card-width"` | `CSS unit` | `15rem` | controls the card min-width |
| `"--card-padding"` | `CSS padding` | `1rem` | controls the padding |
| `"--card-footer-padding"` | `CSS padding` | `1.2rem 1rem` | controls the padding for the footer |
| `"--card-min-height"` | `CSS unit` | `5rem` | controls the min-height of the main |
| `"--card-border-width"` | `CSS unit` | `1px` | controls the border-width |
| `"--card-border-color"` | `Color` | `var(--colors-neutral-gray2, #c6c6c6)` | controls the border-color |
## Types
-

## Translations
- Title 


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/card
```

## Usage

```html
<script type="module">
  import '@interzero/card/wc';
</script>

<iz-card></iz-card>
```

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
