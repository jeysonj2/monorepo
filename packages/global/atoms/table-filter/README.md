# @interzero-global/table-filter

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"columns"` | `Column[]` | `[]` | `false` | displayes the available columns to filter on | 

## Events
| name | type | description |
|------|------|-------------|
| `"change"` | `CustomEvent<ChangeEvent>` | triggered when all 3 inputs have value (column, filter & value) |

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--table-filter-gap"` | `CSS unit` | `1rem` | controls the gap between inputs |

## Types
### HiddenInput 
```typescript
interface HiddenChangeEvent {
  value: string;
}
```
### TableFilter
```typescript
type FilterType = 'equal-to' | 'contains' | 'begins-with' | 'in-between' | 'not-equal-to' | 'greater-then' | 'less-then';
type ChangeEvent = { value: string; column: string; filter: FilterType };
type Column = { id: string; name: string };
type InputType = 'column' | 'filter' | 'value';
```

## Translations
| key | description |
|-----|-------------|
| "equal to" | used in filter dropdown |
| "contains" | used in filter dropdown |
| "begins with" | used in filter dropdown |
| "in between" | used in filter dropdown |
| "not equal to" | used in filter dropdown |
| "greater then" | used in filter dropdown |
| "less then" | used in filter dropdown |
| "Type value" | placeholder of value |


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero-global/table-filter
```

## Usage

```html
<script type="module">
  import '@interzero-global/table-filter/wc';
</script>

<iz-global-table-filter></iz-global-table-filter>
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
