# @interzero/input-template

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
