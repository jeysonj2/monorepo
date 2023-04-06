# @interzero-pmp/flow-option

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"variant"` | `Variant` | "default" | `"false"` | controls the variant of the `FlowOption` |
| `"value"` | `string`| "Empty Descriiption" | `"true"` | the description-value |
| `"checked"` | `boolean` | `false` | `"false"` | control if default-button is checked or not |
| `"id"` | `HTMLAttribute` | - | `"false"` | This should always be present as all events will send this id-value when dispatched |

## Events 
| name | Type | description |
|-------|------|-------------|
| `"toggle"` | `CustomEvent<ClickEvent>` | dispatched when the default-button is pressed |
| `"edit"` | `CustomEvent<ClickEvent>` | dispatched when the edit-button is pressed |
| `"add"` | `Event` | dispatched when the add-button is pressed |
| `"save"` | `Event` | dispatched when the save-button is pressed |

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--flow-option-height"` | `"CSS unit"` | `6rem` | height of the element | 
| `"--flow-option-edit-gap"` | `"CSS unit"` | `0.2rem` | gap when variant is `"edit"` |

## Types
```typescript
type Variant = 'default' | 'edit' | 'add' | 'save';
type ClickEvent = { id: string; };
```

## Translations
- save
- edit 

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero-pmp/flow-option
```

## Usage

```html
<script type="module">
  import '@interzero-pmp/flow-option/wc';
</script>

<iz-pmp-flow-option></iz-pmp-flow-option>
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
