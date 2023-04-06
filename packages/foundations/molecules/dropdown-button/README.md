# @interzero/dropdown-button

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"open"` | `boolean` | `false` | `false` | controls the open state of dropdown (which rotates the caret) |
| `"disabled"` | `boolean` | `false` | `false` | controls the disabled state |
| `"variant"` | `Variant` | `"default"` | `false` | controls the variant |
| `"direction"` | `Direction` | `"down"` | `false` | controls the direction of the caret (which side to rotate to) |
| `"placeholder"` | `text` | - | `false` | sets the placeholder value when variant = "input" |
| `"inputvalue"` | `text` | - | `false` | controls the input type (when variant = input) |

## Events
| name | type | description |
|------|------|-------------|
| `"dropdown-state"` | `CustomEvent<StateEvent>` | triggered when button is clicked or open attribute is changed | 
| `"input-change"` | `CustomEvent<HiddenChangeEvent>` | triggered when input is triggering `suspended-input-change` (variant=input) | 

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--dropdown-button-min-width"` | `CSS unit` | `170px` | overrides the button min-width value | 
| `"--dropdown-button-padding"` | `CSS padding` | `0 0.2rem` | sets the padding for the div inside the dropdown (variant != input) |

## Types
### InputTemplate
```typescript
interface HiddenChangeEvent {
  value: string;
}
```
### DropdownButton
```typescript
type Variant = 'default' | 'text' | 'input';
type Direction = 'up' | 'down';
type StateEvent = { open: boolean };
```

## Translations
- 


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/dropdown-button
```

## Usage

```html
<script type="module">
  import '@interzero/dropdown-button/wc';
</script>

<iz-dropdown-button></iz-dropdown-button>
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
