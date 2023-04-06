# @interzero/option

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"variant"` | `Variant` | `"default"` | `false` | controls the variant of the option | 
| `"value"` | `string` | - | `trye` | sets the value of the option (used in change event) |
| `"checked"` | `boolean` | `false` | controls the options checked state, if checked change event will be triggered |

## Events
| name | type | description |
|------|------|-------------|
| `"change"` | `CustomEvent<ChangeEvent>` | triggered whenever clicked or property "checked" is updated |

## CSS variables
### External 
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--button-padding"` | `CSS padding` | `0` | controls the padding for the button | 
### Internal
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--option-padding"` | `CSS padding` | `0 0.5rem` | controls the padding for the option | 

## Types
```typescript
type ChangeEvent = { checked: boolean; value: string; text: string };
type Variant = 'plain' | 'default' | 'empty';
type DropdownSearchEvent = { value: string };
type DropdownValueChangeEvent = {
  value: string | null;
  values: string[] | undefined;
};
```

## Translations
- 


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/option
```

## Usage

```html
<script type="module">
  import '@interzero/option/wc';
</script>

<iz-option></iz-option>
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
