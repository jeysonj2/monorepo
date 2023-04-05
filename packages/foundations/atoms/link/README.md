# @interzero/link

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"href"` | `string` | - | `false` | the actual url-link of the link |
| `"variant"` | `Variant` | `link` | `false` | the variant of link |

## Events
-
## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--link-font-size"` | `"CSS unit"` | `var(--typography-body-font-size, 12px)` | controls the font-size of link |
| `"--link-line-height"` | `"CSS unit"` | `var(--typography-body-line-height, 15px)` | controls the line-height of link |
| `"--link-font-family"` | `"CSS font"` | `var(--default-typography-body-font-family, 'Inter')` | controls the font-family of link |
| `"--link-font-weight"` | `"number"` | `400` | controls the font-weight of the link |
| `"--link-font-weight-bold"` | `"number"` | `600` | controls the font-weight of the link when active (bold mode) |
| `"--link-color"` | `"Color"` | `#4d5eff` | controls the color of the link |
| `"--link-color-text"` | `"Color"` | `#000` | controls the color of the link when variant = text |
| `"--link-hover-color"` | `"Color"` | `"#001aff"` | controls the color of the link when hover state |
| `"--link-pressed-color"` | `"Color"` | `"#000e8e"` | controls the color of the link when hover state |

## Types
```typescript
type Variant = 'text' | 'link';
```

## Translations
- 


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/link
```

## Usage

```html
<script type="module">
  import '@interzero/link/wc';
</script>

<iz-link></iz-link>
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
