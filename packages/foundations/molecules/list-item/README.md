# @interzero/list-item

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"isDeletable"` | `boolean` | `true` | `false` | sets whether if item should be deletable or not |
| `"isDraggable"` | `boolean` | `true` | `false` | sets whether if item should be draggable or not |
| `"dragged"` | `boolean` | `false` | `false` | sets whether if item is being dragged or not |
| `"size"` | `Size` | `"medium"` | `false` | sets the size of the item (from button size) |

## Events
| name | type | description |
|------|------|-------------|
| `"remove"` | `Event` | triggered whenever remove button is pressed (`isDeletable` = true) |
| `"drag-start"` | `CustomEvent<DragStartEvent>` | triggered whenever the item is clicked (not the content) | 

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--list-item-background-color"` | `Color` | `white` | controls the background color of item | 
| `"--list-item-list-icon-margin-right"` | `CSS unit` | `0.5rem` | `false` | controls the list-icon margin-right | 
| `"--list-item-padding"` | `CSS padding` | `0.5rem` | `false` | controls the padding of the list-item | 

## Types
### Button 
```typescript
type Size = 'small' | 'medium' | 'large';
```
### ListItem 
```typescript
type DragStartEvent = { target: ListItem; pageX: number; pageY: number };
```

## Translations
- 


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/list-item
```

## Usage

```html
<script type="module">
  import '@interzero/list-item/wc';
</script>

<iz-list></iz-list>
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
