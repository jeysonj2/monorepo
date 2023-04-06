# @interzero-global/logo

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|¨
| `"size"` | `Size` | `"medium"` | `false` | controls the size of logo |

## Events
--

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--logo-size-width"` | `CSS unit` | `176px` | controls the container width |
| `"--logo-size-height"` | `CSS unit` | `65px` | controls the container height |
| `"--logo-size-percentage"` | `numeric` | `1` | controls the scale of the logo |

## Types
```typescript
type Size = 'small' | 'medium' | 'large';
```

## Translations
--

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero-global/logo
```

## Usage

```html
<script type="module">
  import '@interzero-global/logo/wc';
</script>

<iz-global-logo></iz-global-logo>
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
