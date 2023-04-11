# @interzero/input


## Properties
### InputTemplate
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"required"` | `boolean` | `false` | `false` | controls whether input is required or not |
| `"validateAtStart"` | `boolean` | `false` | `false` | controls whether input should do a initial check of state |
| `"includeAllErrorTypes"` | `boolean` | `false` | `false` | controls whether input should trigger error statements even if statement is missing from errors object |
| `"name"` | `string` | - | `false` | should be used if you want this element to be used in a form (like HTML) |
| `"type"` | `string` | `text` | `false` | HTMLInputElement types |
| `"value"` | `string` | - | `false` | sets the value of input |
| `"defaultValue"` | `string` | - | `false` | sets the default value of input (works indentical to value) |
| `"matchOther"` | `string` | - | `false` | the Identity of another input, An extended rule to tell the input to look for another input to check against its value |
| `"min"` | `number` | - | `false` | controls the HTML property value |
| `"max"` | `number` | - | `false` | controls the HTML property value |
| `"minlength"` | `number` | - | `false` | controls the HTML property value |
| `"maxlength"` | `number` | - | `false` | controls the HTML property value |
| `"suspenseDelay"` | `number` | `500` | `false` | controls the suspended delay time of input-change |
| `"pattern"` | `HTML RegExp` | - | `false` | HTML property to match certain regex pattern |
| `"errors"` | `Errors` | - | `false` | Use this to display errors related to the ValidityState of HTML |
| `"warnings"` | `Errors` | - | `false` | Use this to display warnings related to the ValidityState of HTML |
### Input 
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"placeholder"` | `string` | `false` | `false` | sets the placeholder value - this is not being translated at the moment |
| `"type"` | `Types` | `text` | `false` | controls the HTML input type with a subset |
| `"textarea"` | `boolean` | `false` | `false` | controls whether input should be textarea or not |

## Events
### InputTemplate
| name | type | description |
|------|------|-------------|
| `"input-change"` | `"CustomEvent<InputEventChangeInfo>"` | triggered whenever input is updated |
| `"suspended-input-change"` | `"CustomEvent<InputEventChangeInfo>"` | triggered whenever input-change is triggered but suspended for a duration |
| `"input-error"` | `"CustomEvent<StateEvent>"` | triggered whenever there's an error in input and a matching error statement |
| `"input-warning"` | `"CustomEvent<StateEvent>"` | triggered whenever there's an error in input and a matching warning statement |
| `"input-success"` | `"CustomEvent<StateEvent>"` | triggered whenever input is valid |

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--input-border-width"` | `
| `"--input-border-color"` 
| `"--input-border-radius"`
| `"--input-border-style"` 
| `"--input-font-family"`
| `"--input-font-size"`
| `"--input-padding"`
| `"--input-text-indent"`
| `"--input-disabled-color"`
| `"--input-disabled-background-color"`
| `"--input-height-large"`
| `"--input-height-medium"`
| `"--input-height-small"`
| `"--input-background-color"`
| `"--input-color"`
| `"--input-font-size"`
| `"--input-hover-border-color"`
| `"--input-active-border-color"`
| `"--input-focus-border-color"`

## Types
### InputTemplate
```typescript
type BaseErrorTypes =
  | 'badInput'
  | 'customError'
  | 'patternMismatch'
  | 'rangeOverflow'
  | 'rangeUnderflow'
  | 'stepMismatch'
  | 'tooLong'
  | 'tooShort'
  | 'valid'
  | 'typeMismatch'
  | 'valueMissing';

type ErrorTypes = BaseErrorTypes | 'matchOther'; // custom error type to match other values inside the same form

type Errors = Partial<{ [key in ErrorTypes]: string }>;

interface IEvent<E = HTMLInputElement> extends Event {
  target: EventTarget & E;
}

interface StateEvent {
  message: string | null;
  type: 'error' | 'warning' | 'success';
}
interface ChangeEvent {
  value: string;
}

interface InputEventMap {
  'input-warning': CustomEvent<StateEvent>;
  'input-success': CustomEvent<StateEvent>;
  'input-error': CustomEvent<StateEvent>;
  'input-change': CustomEvent<ChangeEvent>;
}
```
### Input 
```typescript
type Types = 'text' | 'number' | 'password' | 'email' | 'url' | 'tel';
type Size = 'small' | 'medium' | 'large';

interface IEvent<E = HTMLInputElement> extends Event {
  target: EventTarget & E;
}
```

## Translations
Should use placeholder variable and translate it! (pending translate function..)


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/input
```

## Usage

```html
<script type="module">
  import '@interzero/input/wc';
</script>

<iz-input></iz-input>
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
