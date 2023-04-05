# @interzero-pmp/flow-content

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"data"` | `"Data[]"` | `[]` | `true` | the complete data scope of nodes |
| `"root"` | `"Data"` | `undefined` | `true` | the root of the data (can not take first index as it could not always be the case) |
| `"variant"` | `"Variant"` | `"default"` | `false` | controls if normal or edit mode |

## Events
| name | type | description |
|------|------|-------------|
| `"complete"` | `"CompleteEvent"` | triggered when done is pressed (in variant="default") or save (in variant="edit")

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--flow-roadmap-position-top"` | `"CSS unit"` | `1rem` | controls where the roadmap is placed in the screen-top with sticky position |
| `"--flow-roadmap-position-left"` | `"CSS unit"` | `1rem` | controls where the roadmap is placed in the screen-left with sticky position |
| `"--flow-content-price-position-top"` | `"CSS unit"` | `1rem` | controls where the price is placed in the screen-top with sticky position |
| `"--flow-content-price-position-left"` | `"CSS unit"` | `1rem` | controls where the price is placed in the screen-left with sticky position |

## Types
### FlowOptionPopup
```typescript
type PriceAffectionType = 'multiplication' | 'addition';
type PopupData = Partial<{
  priceAffection: number;
  priceAffectionType: PriceAffectionType;
  value: string;
  id: string;
  parent: string;
}>;
// event types
type SubmitEventType = {
  id?: string;
  parent?: string;
  value: string;
  priceAffection: string;
  priceAffectionType: PriceAffectionType;
};
type RemoveEventType = { id: string; parent?: string };
```
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
### FlowRoadmap
```typescript
type Answer = {
  question: string;
  option: string;
  questionId: string | 'final-screen';
  optionid: string;
};
```
### FlowView
```typescript
type Variant = 'default' | 'edit';
type Option = { id: string; value: string; checked: boolean };
interface QuestionData {
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
### FlowContent
```typescript
type Data = Omit<QuestionData, 'options'> &
  Omit<PopupData, 'id'> & {
    id: string;
    options: string[];
  };
type CompleteType = 'done' | 'save';
type DoneData = {
  type: 'done';
  data: Answer[];
};
type SaveData = {
  type: 'save';
  data: Data[];
};
type CompleteEvent = SaveData | DoneData;
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
### FlowRoadmap
- Overview Screen
### FlowOptionPopup
- multiplication
- addition
- add
- save 
- delete
- Price Affection Type
- Type a price-affection
- Select a Price Affection Type
- Price Affection
- Type a value
- Value
### FlowEnd
- DONE
### FlowContent
- Current Price: {price} €


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero-pmp/flow-content
```

## Usage

```html
<script type="module">
  import '@interzero-pmp/flow-content/wc';
</script>

<iz-pmp-flow-content></iz-pmp-flow-content>
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
