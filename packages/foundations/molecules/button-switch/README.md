# @interzero/button-switch

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"left"` | `string` | - | `true` | sets the text of the left button (with translation) |
| `"right"` | `string` | - | `true` | sets the text of the right button (with translation) |
| `"size"` | `Size` | `"medium"` | `false` | sets the size of the button | 
| `"active"` | `ActiveState` | `"left"` | `false` | sets which of the buttons are active |
| `"noInternalClick"` | `boolean` | `false` | `false` | if true it disables internal clicking and can only be controlled from outside by setting `"active"` |

## Events
| name | type | description |
|------|------|-------------|
| `"change"` | `CustomEvent<ChangeEvent>` | triggered whenever the buttons are switched |

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--buttonswitch-padding"` | `CSS padding` | `0.3rem` | controls the padding of the container |
| `"--buttonswitch-button-padding"` |`CSS padding` | `0 2rem` | controls the padding of the buttons |
| `"--buttonswitch-border-radius"` | `CSS unit` | `var(--border-radius-max, 1000px)` | controls the border radius (container + buttons) |
| `"--buttonswitch-button-min-width"` | `CSS unit` | `80px` | controls the button min-width value |
| `"--buttonswitch-background"` | `Color` | `#d9d9d9` | controls the background color for container |
| `"--buttonswitch-button-active-background"` | `Color` | `white` | controls the active background color for button |
| `"--buttonswitch-button-active-hover-background"` | `Color` | `#f7f7f7` | controls the active hover background color for button |
| `"--buttonswitch-button-inactive-background"` | `Color` | `#eaeaea` | controls the inactive background color for button |
| `"--buttonswitch-button-inactive-hover-background"` | `Color` | `#e6e6e6` | controls the inactive hover background color for button |
| `"--buttonswitch-button-inactive-color"` | `Color` | `#848484` | controls the inactive color for button |

## Types
```typescript
type ActiveState = 'left' | 'right';
type ChangeEvent = { state: ActiveState };
```

## Translations
- 


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/button-switch
```

## Usage

```html
<script type="module">
  import '@interzero/button-switch/wc';
</script>

<iz-button-switch></iz-button-switch>
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
