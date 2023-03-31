# @interzero/confetti

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Property Table
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"width"` | `number` | `clientWidth||200` | controls the viewport width of the component |
| `"height"` | `number` | `clientHeight||200` | controls the viewport height of the component |
| `"placements"` | `Placement[]` | `["top-left"]` | controlls where in the viewbox the confetti should be triggered from |
| `"playPopSound"` | `boolean` | `true` | controls if the confetti should play the sound of `"Pop"` |
| `"playYaySound"` | `boolean` | `true` | controls if the confetti should play the sound of `"Yay"` |

## Types 
```typescript
type Placement = "top-center" | "top-left" | "top-right" | "center-center" | "center-left" | "center-right" | "bottom-center" | "bottom-left" | "bottom-right"
```

## Installation

```bash
npm i @interzero/confetti
```

## Usage

```html
<script type="module">
  import '@interzero/confetti/wc';
</script>

<iz-confetti></iz-confetti>
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
