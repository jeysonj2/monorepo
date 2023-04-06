# @interzero-pmp/flow-page

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"data"` | `"Data[]"` | `[]` | `false` | the complete nodes of flow-options |
| `"userData"` | `"UserModel"` | `false` | the user entity (from backend) |

## Events
| name | type | description |
|------|------|-------------|
| `"viewport-change"` | `"CustomEvent<PageTemplateChangeEvent>"` | forwards event from `"page-template"` |
| `"complete"` | `"CustomEvent<CompleteEvent>"` | forwards event from `"flow-content"` |

## CSS variables
-

## Types
### ButtonSwitch
```typescript
type ActiveState = 'left' | 'right';
type SwitchChangeEvent = { state: ActiveState };
```
### PageTemplate
```typescript
type Role = 'user' | 'admin';
type MenuType = 'administration';
type ChangeType = HeaderChangeType | MenuType;
type PageTemplateChangeEvent = {
  type: ChangeType;
  value: string;
};
interface UserModel {
  role: Role;
}
```
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
### FlowPage
```typescript
export { Data, CompleteEvent } from FlowContent
export { PageTemplateChangeEvent, UserModel } from PageTemplate
```

## Translations
### Footer
- © 2022 - Interzero Circular Solutions Germany GmbH
### UserMenu 
- Logout
- User Profile
### PageTemplate 
- Administration
- Users
- List of Price List 
- Price Flow
### FlowOption
- save
- edit 
### FlowQuestion
- Empty Question
- Empty Description
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
### FlowPage 
- Normal View
- Edit Mode

## Translation Example 
```typescript
window.izTranslation.load({
  id: 'en',
  name: 'english',
  flag: 'EN',
  translations: {
    "Logout": "Logout",
    "User Profile": "User Profile",
    "Administration": "Administration",
    "Users": "Users",
    "List of Price List": "List of Price List",
    "Price Flow": "Price Flow",
    "save": "save",
    "edit ": "edit ",
    "Empty Question": "Empty Question",
    "Empty Description": "Empty Description",
    "Overview Screen": "Overview Screen",
    "multiplication": "multiplication",
    "addition": "addition",
    "add": "add",
    "save ": "save ",
    "delete": "delete",
    "DONE": "DONE",
    "Current Price: {price} €": "Current Price: {price} €",
    "Normal View": "Normal View",
    "Edit Mode": "Edit Mode",
    "Price Affection Type": "Price Affection Type",
    "Type a price-affection": "Type a price-affection",
    "Select a Price Affection Type": "Select a Price Affection Type",
    "Price Affection": "Price Affection",
    "Type a value": "Type a value",
    "Value": "Value",
    "© 2022 - Interzero Circular Solutions Germany GmbH": "© 2022 - Interzero Circular Solutions Germany GmbH",
  }
})
```

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero-pmp/flow-page
```

## Usage

```html
<script type="module">
  import '@interzero-pmp/flow-page/wc';
</script>

<iz-pmp-flow-page></iz-pmp-flow-page>
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
