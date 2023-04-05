# @interzero/button

## Properties
### FormElement 
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"disabled"` | `boolean` | `false` | `false` | controls if its disabled or not | 
### Button
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"type"` | `"Types"` | - | `false` | controls the HTMLButtonElement.type |
| `"variant"` | `"Variant"` | `default` | `false` | controls the variant of button |
| `"size"` | `"Size"` | `large` | `false` | controls the size of the button |


## Events
| name | type | description |
|------|------|-------------|
| `"click"` | `Event` | triggered whenever clicked |
| `"submit"` | `SubmitEvent` | triggered whenever clicked and type = submit | 

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|

## Types
```typescript
type Types = 'button' | 'reset' | 'submit';
type Variant = 'text' | 'default' | 'circle' | 'square';
type Size = 'small' | 'medium' | 'large';
```

## Translations
- 


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/button
```

## Usage

```html
<script type="module">
  import '@interzero/button/wc';
</script>

<iz-button></iz-button>
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
