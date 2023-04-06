# @interzero/field

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"label"` | `string` | - | `false` | controls the label text (translated) |
| `"help"` | `string` | - | `false` | sets the help text which is displayed if no error or warning (translated) |
| `"counter"` | `boolean` | `false` | controls if counter should be disabled or not (would reveal a counter next to input) |

## Events
-

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--field-gap"` | `CSS unit` | `0.4rem` | controls the gap | 

## Types (all internal)
### InputTemplate
```typescript
interface HiddenStateEvent {
  message: string | null;
  type: 'error' | 'warning' | 'success';
}
interface HiddenChangeEvent {
  value: string;
}
```
### Field
```typescript
type InputState = 'warning' | 'error' | 'success'; 
```

## Translations
- 


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/field
```

## Usage

```html
<script type="module">
  import '@interzero/field/wc';
</script>

<iz-field></iz-field>
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
