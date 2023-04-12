# @interzero-global/table-column-order

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"columns"` | `Column[]` | `[]` | `false (but good)` | displayes the columns in order they come, respects the value of checked |
| `"open"` | `boolean` | `false` | `false` | controls the popup if its open or not |

## Events
| name | type | description |
|------|------|-------------|
| `"save"` | `CustomEvent<SaveEvent>` | triggered when save is pressed (if first preset then after its save) |

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--tablecolumnorder-list-item-padding"` | `CSS unit` | `0.5rem` | controls the padding of the list-item |
| `"--tablecolumnorder-card-width"` | `CSS unit` | `512px` | controls the card-min width |

## Types
```typescript
export type Column = { id: string; name: string; checked: boolean; };
export type SaveEvent = {
  columns: Column[];
  preset: string|null;
}
```
## Global Functions
| name | return-type | parameters | description |
|------|-------------|------------|-------------|
| `show` | `void` | - | controls if the popup should be shown |
| `hide` | `void` | - | controls if the popup should be hidden |

## Translations
| key | description |
|-----|-------------|
| "Order Columns" | popup title (main) |
| "Save" | button text |
| "Save as preset" | checkbox text |
| "Save as Preset" | Popup title (preset) |
| "Preset name" | label for preset input field | 
| "Please choose a name for the preset" | displayed when no value preset for name fo preset |


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero-global/table-column-order
```

## Usage

```html
<script type="module">
  import '@interzero-global/table-column-order/wc';
</script>

<iz-global-table-column-order></iz-global-table-column-order>
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
