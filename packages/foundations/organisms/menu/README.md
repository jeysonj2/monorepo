# @interzero/menu

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"placement"` | `Placement` | `"bottom-right"` | used to control the popover placement | 
| `"variant"` | `Variant` | `"default"` | `false` | controls the variant of menu |

## Events
| name | type | description |
|------|------|-------------|
| `"change"` | `CustomEvent<ChangeEvent>` | triggered whenever a menu-item is selected | 

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--menu-gap"` | `CSS unit` | `0.2rem` | controls the gap between menu-button and popover-menu |
| `"--menu-height"` | `CSS unit` | `18rem` | controls the max-height of the menu (popover) |
| `"--menu-color"` | `Color` | `var(--colors-semantic-white, white)` | controls the menu background-color | 
| `"--menu-shadow"` | `CSS shadow` | `0px 2px 2px rgba(0, 0, 0, 0.25)` | controls the menu shadow | 

## Types
### Popover
```typescript
type Placement = "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center" | "left-top" | "left-bottom" | "left-center" | "right-top" | "right-bottom" | "right-center";
```
### Button
```typescript
type Variant = 'text' | 'default' | 'circle' | 'square';
```
### MenuItem
```typescript
type ChangeEvent = { value: string };
```

## Translations
--


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/menu
```

## Usage

```html
<script type="module">
  import '@interzero/menu/wc';
</script>

<iz-menu></iz-menu>
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
