# @interzero-global/table-header-column

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"searchable"` | `boolean` | `false` | `false` | controls if search should be available |
| `"sortable"` | `boolean` | `false` | `false` | controls if sort should be available |

## Events
| name | type | description |
|------|------|-------------|
| `"sort"` | `CustomEvent<SortEvent>` | triggered whenever sortable is true and button is pressed |
| `"search"` | `CustomEvent<SearchEvent>` | triggered whenever searchable is true and input has changed (suspended-change) |

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--tableheadercolumn-button-padding"` | `CSS unit` | `4px` | controls the button padding |
| `"--tableheadercolumn-sort-color"` | `Color` | `grey` | controls the default color of the sorting icons |
| `"--tableheadercolumn-sort-color-selected"` | `Color` | `black` | controls the selected color of the sorting icons |
## Types
```typescript
export type SortDirection = 'down' | 'up' | 'default';
export type SortEvent = { direction: SortDirection };
export type SearchEvent = { value: string };
```
## Global Functions
| name | return-type | parameters | description |
|------|-------------|------------|-------------|


## Translations
| key | description |
|-----|-------------|
| "Search" | (not really translated as input placeholder cannot yet translate) |


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero-global/table-header-column
```

## Usage

```html
<script type="module">
  import '@interzero-global/table-header-column/wc';
</script>

<iz-global-table-header-column></iz-global-table-header-column>
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
