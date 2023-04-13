# @interzero/accordion

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"direction"` | `Direction` | "down" | `false` | controls which way the icon is rotated |
| `"expandMode"` | `ExpandMode` | "partial" | `false` | controls if height should only affect main or the whole (default only main) |
| `"open"` | `boolean` | `false` | `false` | controls the open state |

## Slots
| name | description |
|------|-------------|
| `"title"` | used to put something in the title (shown when expandMode = partial) |
| `"icon"` | replace the icon if necessary (default is arrow-icon) |
| `"default"` | the content inside the main |

## Events
| name | type | description |
|------|------|-------------|

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--accordion-padding-header"` | `CSS padding` | '0' | controls the padding of the header component |
| `"--accordion-padding-main"` | `CSS padding` | '0 1rem' | controls the padding of the main component |

## Types
```typescript
export type Direction = "up" | "down";
export type ExpandMode = 'partial'|'full';
```
## Global Functions
| name | return-type | parameters | description |
|------|-------------|------------|-------------|
| `"toggle"` | `void` | - | call this to toggle open/close state


## Translations
| key | description |
|-----|-------------|


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/accordion
```

## Usage

```html
<script type="module">
  import '@interzero/accordion/wc';
</script>

<iz-accordion></iz-accordion>
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
