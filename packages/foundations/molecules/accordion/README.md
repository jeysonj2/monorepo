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
| `"open-change"` | `CustomEvent<{value:boolean}>` | triggered whenever open is triggered (logic from ReactiveProperty) |

## CSS Variables
| Name                             | Type         | Default Value | Description                                              |
|----------------------------------|--------------|---------------|----------------------------------------------------------|
| `--accordion-max-height`         | CSS unit   | '0px'         | Controls the max-height of the accordion, this intendet to be use only within the component itself |
| `--accordion-header-padding`     | CSS padding  | '0'           | Controls the padding of the header component             |
| `--accordion-main-padding`       | CSS padding  | '0 1rem'      | Controls the padding of the main component               |
| `--accordion-animate-property`   | CSS property | 'max-height'  | Controls the property to be animated in the expand mode  |
| `--accordion-animate-duration`   | CSS time     | '200ms'       | Controls the duration of the animation in the expand mode |
| `--accordion-animate-timing-function` | CSS timing function | 'ease-in' | Controls the timing function of the animation in the expand mode |
| `--accordion-animate-delay`      | CSS time     | '0s'          | Controls the delay of the animation in the expand mode   |
| `--accordion-main-animate-property` | CSS property | 'max-height, padding' | Controls the properties to be animated for the main component in partial expand mode |
| `--accordion-main-animate-duration` | CSS time   | '200ms, 1ms'  | Controls the duration of the animation for the main component in partial expand mode |
| `--accordion-main-animate-timing-function` | CSS timing function | 'ease-in, linear' | Controls the timing function of the animation for the main component in partial expand mode |
| `--accordion-main-animate-delay` | CSS time     | '0s, 200ms'   | Controls the delay of the animation for the main component in partial expand mode |


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
