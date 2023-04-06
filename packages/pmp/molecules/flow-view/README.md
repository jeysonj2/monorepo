# @interzero-pmp/flow-view

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"variant"` | `Variant` | "default" | `false` | controls the variant of question-view |
| `"data"` | `Data` | - | `true` | required field, contains all data to display question-view |

## Events 
| name | Type | description |
|-------|------|-------------|
| `"question-change"` | `CustomEvent<ChangeEvent>` | dispatches when `FlowQuestion` dispatches "change" event |
| `"option-click"` | `CustomEvent<OptionEvent>` | dispatches when `FlowOption` is dispatching either `add`, `edit`, `toggle` event |

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--flow-view-grid-gap"` | `"CSS unit"` | `1rem` | controls the gap between the `"flow-options"` |

## Types 
### FlowOption
```typescript
type OptionVariant = 'default' | 'edit' | 'add' | 'save';
type OptionClickEvent = { id: string; };
```
### FlowQuestion
```typescript
type QuestionNameType = 'question' | 'description';
type QuestionChangeEvent = { name:QuestionNameType; value:string; };
```
### FlowView
```typescript
type Variant = 'default' | 'edit';
type Option = { id: string; value: string; checked: boolean };
interface Data {
  id: string;
  question: string;
  description: string;
  options: Option[];
}
type OptionEvent = {
  optionId: string;
  id: string;
  variant: OptionVariant;
};
type ChangeEvent = { id: string } & QuestionChangeEvent;
```

## Translations
### FlowOption
- save
- edit 
### FlowQuestion
- Empty Question
- Empty Description
### FlowView
-

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero-pmp/flow-view
```

## Usage

```html
<script type="module">
  import '@interzero-pmp/flow-view/wc';
</script>

<iz-pmp-flow-view></iz-pmp-flow-view>
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
