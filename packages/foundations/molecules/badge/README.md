# @interzero/badge

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"variant"` | `Variant` | `"default"` | `false` | controls the variant | 

## Events
-
## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--badge-border-radius"` | `CSS unit` | `var(--border-radius-max, 1000px)` | controls the border-radius |
| `"--badge-height"` | `CSS unit` | `1rem` | controls the height |
| `"--badge-padding"` | `CSS padding` | `0.3rem 1rem` | controls the padding of badge | 
| `"--badge-background-color"` | `Color` | `var(--colors-neutral-gray, gray)` | controls the background-color if not variant present |
| `"--badge-success-background-color"` | `Color` | `var(--colors-semantic-success, green)` | controls the background-color when variant = success |
| `"--badge-error-background-color"` | `Color` | `var(--colors-semantic-error, red)` | controls the background-color when variant = error |
| `"--badge-warning-background-color"` | `Color` | `var(--colors-semantic-warning, orange)` | controls the background-color when variant = warning |
| `"--badge-info-background-color"` | `Color` | `var(--colors-semantic-info, cornflowerblue)` | controls the background-color when variant = info |
| `"--badge-color"` | `Color` | `var(--colors-neutral-white, white)` | controls the color |
| `"--badge-warning-color"` | `Color` | `var(--colors-neutral-black, black)` | controls the color when variant = warning |


## Types
```typescript
type Variant = 'success' | 'error' | 'info' | 'warning' | 'default';
```

## Translations
- 


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/badge
```

## Usage

```html
<script type="module">
  import '@interzero/badge/wc';
</script>

<iz-badge></iz-badge>
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
