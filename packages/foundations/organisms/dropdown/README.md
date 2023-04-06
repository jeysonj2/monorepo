# @interzero/dropdown

TODO improvements:
1. combine menu + dropdown into a template (option + menu-item, dropdown-button + menu-button too)
2. use Card instead of having its own card style 
3. allow for sizing + more unified control 
4. Form validations 

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"multiple"` | `boolean` | `false` | `false` | controls if dropdown can select multiple options or not |
| `"dontshowselected"` | `boolean` | `false` | `false` | used to indicate if dropdown should display selected options or not - I think this can be removed as "fixedText" has same effect but also controls what should be displayed |
| `"donthideonselect"` | `boolean` | `false` | `false` | if `"multiple"` = `false` we can use this control whether the popover should be hidden or not when option is selected (default its being hidden) |
| `"placement"` | `Placement` | `"bottom-right"` | used to control the popover placement | 
| `"fixedText"` | `string` | - | `false` | used to set a fixed text so selected option(s) would not show |
| `"placeholder"` | `string` | - | `false` | used when variant = input for the input placeholder |
| `"variant"` | `Variant` | `"default"` | `false` | controls the variant of dropdown |
| `"dropdownInputMode"` | `DropdownInputMode` | `strict` | `false` | unfinshed, but idea is that this should control if user can search for values and if that value could be used or if strict it should only take clicked values from the options |


## Events
| name | type | description |
|------|------|-------------|
| `"search"` | `CustomEvent<SearchEvent>` | triggered whenever `"variant"` = "input" and user is typing |
| `"change"` | `CustomEvent<ChangeEvent>` | triggered whenever option has been selected |
| `"clear-options"` | `Event` | triggered whenever the other options should be cleared (of being selected) |
| 

## CSS variables
## External
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--button-min-width"` | `CSS unit` | `100%` | controls the options width (which also controls the menu width) | 
### Internal
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--dropdown-menu-height"` | `CSS unit` | `18rem` | controls the max-height of the menu (popover) |
| `"--dropdown-menu-color"` | `Color` | `var(--colors-semantic-white, white)` | controls the menu background-color | 
| `"--dropdown-menu-shadow"` | `CSS shadow` | `0px 2px 2px rgba(0, 0, 0, 0.25)` | controls the dropdown menu shadow | 
| `"--dropdown-gap"` | `CSS unit` | `0.2rem` | controls the gap between dropdown-button and popover-menu |

## Types
### Popover
```typescript
type Placement = "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center" | "left-top" | "left-bottom" | "left-center" | "right-top" | "right-bottom" | "right-center";
```
### DropdownButton
```typescript
type Variant = 'default' | 'text' | 'input';
```
### Option
```typescript
type OptionChangeEvent = { checked: boolean; value: string; text: string };
```
### InputTemplate
```typescript
interface HiddenChangeEvent {
  value: string;
}
```
### Dropdown 
```typescript
type DropdownMode = 'strict' | 'loose';
type SearchEvent = { value: string };
type ChangeEvent = { value: string; name?: string };
type OptionItem = { checked: boolean; text: string };
```

## Translations
| key | description |
|-----|-------------|
| {count} selected items | when the texts of the selected items reach above constant `"TEXT_THRESHOLD"` (=22) is reached | 
| `"Dropdown"` | the default placeholder text (should be changed!) |


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/dropdown
```

## Usage

```html
<script type="module">
  import '@interzero/dropdown/wc';
</script>

<iz-dropdown></iz-dropdown>
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
