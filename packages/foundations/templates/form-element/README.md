# @interzero/form-element

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"disabled"` | `boolean` | `false` | `false` | controls if its disabled or not | 
## Events
-
## CSS variables
-
## Types
-
## Translations
- 


## Internal Logic 
this abstract class is ment to help finding the closest form, and to have basic form-attributes such as disabled.
Classes extending this class should call the function `"findFormElement(selector:string, element:HTMLElement)"`
selector is the search value for the form while element should simply be the class itself. 

### Example usage of `"findFormElement"`
```typescript
connectedCallback(): void {
  super.connectedCallback();
  this.findFormElement("form", this);
}
```

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/form-element
```

## Usage

```html
<script type="module">
  import '@interzero/form-element/wc';
</script>

<iz-form-element></iz-form-element>
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
