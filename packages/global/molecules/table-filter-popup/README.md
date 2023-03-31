# @interzero-global/table-filter-popup

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"columns"` | `Column[]` | `[]` | `false` | contains the columns of the table (being passed to `TableFilter`) |
| `"filters"` | `Partial<Filter>[]` | `[]` | `false`

## Events
| name | type | description |
|------|------|-------------|
| `"save"` | `CustomEvent<SaveEvent>` | triggered when save is pressed, includes the filters (that has values) and closes the popup |

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--tablefilterpopup-card-width"` | `CSS unit` | `512px` | as TableFilter has a width of 500 we add this so when empty set it should not shrink |
| `"--tablefilterpopup-list-gap"` | `CSS unit` | `0.6rem` | controls verticle gap between the items + margin between list and link "+ Add Filter" |

## Types
### TableFilter
```typescript
type Filter = { column: string; value: string; filter: FilterType; }
type ChangeEvent = Filter;
type Column = { id: string; name: string };
```
### TableFilterPopup
```typescript
type SaveEvent = { filters: Filter[] }
```
## Global Functions
| name | return-type | parameters | description |
|------|-------------|------------|-------------|
| `show` | `void` | - | controls if the popup should be shown |
| `hide` | `void` | - | controls if the popup should be hidden |

## Translations
| key | description |
|-----|-------------|
| "Filter Columns" | popup title |
| "+ Add Filter" | link text to add new filter items |
| "Save" | save button text |

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero-global/table-filter-popup
```

## Usage

```html
<script type="module">
  import '@interzero-global/table-filter-popup/wc';
</script>

<iz-global-table-filter-popup></iz-global-table-filter-popup>
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
