# @interzero/menu-button

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"direction"` | `Direction` | `"down"` | `false` | controls the direction where the caret icon should point towards | 
| `"variant"` | `Variant` | `"default"` | `false` | controls the button variant | 
| `"open"` | `boolean` | `false` | `false` | controls the open state | 

## Events
| name | type | description |
|------|------|-------------|
| `"menu-state"` | `CustomEvent<StateEvent>` | triggered when button is clicked or open attribute is changed | 

## CSS variables
### external
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--button-height-large"` | `CSS unit` | `40px` | controls the height of the |
| `"--button-height-small"` | `CSS unit` | `25px` | controls the height of the |
| `"--button-pressed-color"` | `Color` | `white` | controls the color when pressed (which also sets the color of the caret icon) |
### internal
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--menu-button-min-width"` | `CSS unit` | `3rem` | controls the min width | 
| `"--menu-button-padding"` | `CSS padding` | `0.2rem` | controls the padding | 
| `"--menu-button-gap"` | `CSS unit` | `0.2rem` | controls the gap | 

## Types
### Button
```typescript 
type Variant = 'text' | 'default' | 'circle' | 'square';
```
### MenuButton
```typescript
type Direction = 'up' | 'down';
type StateEvent = { open: boolean };
```

## Translations
- 


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/menu-button
```

## Usage

```html
<script type="module">
  import '@interzero/menu-button/wc';
</script>

<iz-menu-button></iz-menu-button>
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
