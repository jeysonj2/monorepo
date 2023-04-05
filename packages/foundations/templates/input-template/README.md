# @interzero/input-template

## Properties
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

## Events
| name | type | description |
|------|------|-------------|
| `"input-change"` | `"CustomEvent<InputEventChangeInfo>"` | triggered whenever input is updated |
| `"suspended-input-change"` | `"CustomEvent<InputEventChangeInfo>"` | triggered whenever input-change is triggered but suspended for a duration |
| `"input-error"` | `"CustomEvent<StateEvent>"` | triggered whenever there's an error in input and a matching error statement |
| `"input-warning"` | `"CustomEvent<StateEvent>"` | triggered whenever there's an error in input and a matching warning statement |
| `"input-success"` | `"CustomEvent<StateEvent>"` | triggered whenever input is valid |

## CSS variables
-

## Types
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

## Translations
- 


This is a TypeScript class `"InputTemplate"` which extends the FormElement class. It represents an input element that can be added to an HTML form.

The `"InputTemplate"` class has several properties which can be set using the @property decorator. These include the input's required flag, name, type, value, defaultValue, min, max, minLength, maxLength, pattern, matchOther, includeAllErrorTypes, errors, and warnings.

When the `"InputTemplate"` element is connected to the DOM, it creates a hidden input element and attaches it to the nearest form element. The `"InputTemplate"` element also listens for changes to another input element if specified by the matchOther property. When the `"InputTemplate"` element is disconnected from the DOM, the hidden input element is removed.

The `"InputTemplate"` class has a `"checkError"` method which is used to validate the input and dispatches events if there are any errors or warnings. The updateHidden method is used to update the hidden input's value and dispatches a custom input-change event.


## CheckError 
`"checkError"` is a method that is called whenever the value of the `"InputTemplate"` changes, either by user input or programmatically. The purpose of this method is to check whether the input is valid or not, and dispatch an event depending on the validity status.

The method first checks whether the matchOther property is set. If it is, it compares the value of the current input with the value of the input specified in the matchOther property. If the values do not match, the method checks the errors and warnings properties to see if a message has been specified for the matchOther error type. If a message is found, an event of type input-error or input-warning is dispatched, depending on whether the message was specified in the errors or warnings property, respectively. If no message is found, and the includeAllErrorTypes property is set to true, an event of type input-error is dispatched with a generic error message.

If the value of the input matches the value of the input specified in the matchOther property, or if the matchOther property is not set, the method checks whether the input is valid according to its type and attributes, using the validity property of the input. If the input is valid, an event of type input-success is dispatched. If the input is not valid, the method checks the errors and warnings properties to see if a message has been specified for any of the error types reported by the validity property. If a message is found, an event of type input-error or input-warning is dispatched, depending on whether the message was specified in the errors or warnings property, respectively. If no message is found, and the includeAllErrorTypes property is set to true, an event of type input-error is dispatched with a generic error message.

The errors and warnings properties are objects that contain messages for specific error types that may be reported by the validity property of the input. For example, if the valueMissing property of the validity property is true, it means that the input is required but no value has been entered. In this case, if a message has been specified

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/input-template
```

## Usage

```html
<script type="module">
  import '@interzero/input-template/wc';
</script>

<iz-input-template></iz-input-template>
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
