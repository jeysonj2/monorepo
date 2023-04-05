# @interzero/checkbox

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"label"` | `"string"` | - | `false` | controls the label - this is being translated |
| `"variant"` | `"Variant"` | `default` | `false` | controls the variant |
| `"checked"` | `boolean` | `false` | `false` | controls the checked value |
| `"locked"` | `boolean` | `false` | `false` | controls if the checkbox is in locked modde (means that it would not trigger checked by clicking) |

## Events
| name | type | description |
|------|------|-------------|
| `"change"` | `"CustomEvent<ChangeEvent>"` | triggered when clicked |

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--checkbox-cursor"` | `"CSS cursor"` | `"pointer"`  | default cursor|
| `"--checkbox-disabled-cursor"` | `"CSS cursor"` | `"not-allowed"` | disabled cursor |
| `"--checkbox-disabled-color"` | `"Color"` | `"gray"` | disabled color (for label and icon) |
## Types
```typescript
type Variant = 'plain' | 'default';
type ChangeEvent = {
  checked: boolean;
}
```

## Translations
- 


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.


## CSS variables 
| name | description | default-value | 
|------|-------------|---------------|
| `"--checkbox-cursor"` | default cursor | `"pointer"` |
| `"--checkbox-disabled-cursor"` | disabled cursor | `"not-allowed"` |
| `"--checkbox-disabled-color"` | disabled color | `"gray"` |

## Installation

```bash
npm i @interzero/checkbox
```

## Usage

```html
<script type="module">
  import '@interzero/checkbox/wc';
</script>

<iz-checkbox></iz-checkbox>
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
