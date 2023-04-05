# @interzero/typography

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"variant"` | `"Variant"` | `body` | `false` | controls the typography variant |

## Events
-

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--typography-font-family"` | `"CSS font"` | `Inter, sans-serif` | the fallback font for all variants used |
| `"--typography-color"` | `"Color"` | `black` | controls color of typography |
| `"--typography-display"` | `"CSS display"` | `block` | controls the display type of inside html element (host is inline-block) |
| `"--typography-body-font-size"` | `"CSS unit"` | `12px` | controls the font-size for body variant |
| `"--typography-body-line-height"` | `"CSS unit"` | `15px` | controls the line-height for body variant |
| `"--typography-body-font-weight"` | `"number"` | `400` | controls the font-weight for body variant |
| `"--typography-body-font-family"` | `"CSS font"` | `--default-typography-font-family` | controls the font-family for body variant |
| `"--typography-label-font-size"` | `"CSS unit"` | `13px` | controls the font-size for label variant |
| `"--typography-label-line-height"` | `"CSS unit"` | `16px` | controls the line-height for label variant |
| `"--typography-label-font-weight"` | `"number"` | `400` | controls the font-weight for label variant |
| `"--typography-label-font-family"` | `"CSS font"` | `--default-typography-font-family` | controls the font-family for label variant |
| `"--typography-help-font-size"` | `"CSS unit"` | `9px` | controls the font-size for help variant |
| `"--typography-help-line-height"` | `"CSS unit"` | `10px` | controls the line-height for help variant |
| `"--typography-help-font-weight"` | `"number"` | `400` | controls the font-weight for help variant |
| `"--typography-help-font-family"` | `"CSS font"` | `--default-typography-font-family` | controls the font-family for help variant |
| `"--typography-heading-font-size"` | `"CSS unit"` | `20px` | controls the font-size for heading variant |
| `"--typography-heading-line-height"` | `"CSS unit"` | `24px` | controls the line-height for heading variant |
| `"--typography-heading-font-weight"` | `"number"` | `400` | controls the font-weight for heading variant |
| `"--typography-heading-font-family"` | `"CSS font"` | `--default-typography-font-family` | controls the font-family for heading variant |
| `"--typography-logo-font-size"` | `"CSS unit"` | `36px` | controls the font-size for logo variant |
| `"--typography-logo-line-height"` | `"CSS unit"` | `44px` | controls the line-height for logo variant |
| `"--typography-logo-font-weight"` | `"number"` | `400` | controls the font-weight for logo variant |
| `"--typography-logo-font-family"` | `"CSS font"` | `--default-typography-font-family` | controls the font-family for logo variant |
| `"--typography-logob-font-size"` | `"CSS unit"` | `14px` | controls the font-size for logob variant |
| `"--typography-logob-line-height"` | `"CSS unit"` | `17px` | controls the line-height for logob variant |
| `"--typography-logob-font-weight"` | `"number"` | `400` | controls the font-weight for logob variant |
| `"--typography-logob-font-family"` | `"CSS font"` | `--default-typography-font-family` | controls the font-family for logob variant |
| `"--typography-logob-letter-spacing"` | `"CSS unit"` | `0.2rem` | controls the letter-spacing for logob variant |

## Types
```typescript
type Variant = 'heading' | 'body' | 'logo' | 'logob' | 'help' | 'label';
```

## Translations
- 


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/typography
```

## Usage

```html
<script type="module">
  import '@interzero/typography/wc';
</script>

<iz-typography></iz-typography>
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
