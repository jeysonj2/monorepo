# @interzero/popover

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"placement"` | `Placement` | `"bottom-center"` | `false` | controls the placement of the popover |
| `"target"` | `string` | - | `true` | sets the target the popover should attatch itself to, this via CSS selector |
| `"revealby"` | `Reveals` | `"hover"` | `false` | controls the reveal type |
| `"open"` | `boolean` | `false` | controls the open state of popover |
| `"matchwidth"` | `boolean` | `false` | controls whether the popover should match the width of the target |
| `"hideonoutsideclick"` | `boolean` | `false` | controls if the popover should close if client clicks outside of the popover or targret |

## Events
| name | type | description |
|------|------|-------------|
| `"popover-open"` | `Event` | triggered whenever the popover is opened |
| `"popover-close"` | `Event` | triggered whenever the popover is closed |
| `"all-popover-open"` | `CustomEvent<GlobalOpenEvent>` | triggers on windows level that a popover has opened (to control z-index within other popovers) |



## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--popover-gap"` | `"CSS unit"` | `1rem` | controls the gap between target and popover |
## Types
```typescript
type Reveals = 'hover' | 'click';
type GlobalOpenEvent = { id: string };
type Offset = { x: number; y: number };

type Placement = "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center" | "left-top" | "left-bottom" | "left-center" | "right-top" | "right-bottom" | "right-center";
interface Rectangle {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

```

## Translations
- 


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/popover
```

## Usage

```html
<script type="module">
  import '@interzero/popover/wc';
</script>

<iz-popover></iz-popover>
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
