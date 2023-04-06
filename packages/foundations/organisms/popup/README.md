# @interzero/popup

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"headerTitle"` | `string` | `"Popup Title"` | `false` | sets  the title in the card |
| `"hideonoutsideclick"` | `boolean` | `false` | `false` | controls if the popup should be hidden if you click outside the card area | 
| `"variant"` | `Variant` | controls the variant, parent means it would be shown iside its parent while global would put it over screen and lock scrolling |
| `"state"` | `State` | `"hide"` | `false` | controls the show/hide state |

## Events
| name | type | description |
|------|------|-------------|
| `"popup-show"` | `Event` | triggered whenever popup is shown |
| `"popup-hide"` | `Event` | triggered whenever popup is hidden |

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--popup-backdrop-background"` | `Color` | `rgba(0, 0, 0, 0.1)` | controls the color of backdrop |
| `"--popup-backdrop-filter"` | `CSS filter` | `blur(0px)` | controls the backdop filter effect | 

## Types
```typescript
type State = 'show' | 'hide';
type Variant = 'global' | 'parent';
```

## Translations
| key | description | 
|-----|-------------|
| "Popup Title" | default header title text |


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/popup
```

## Usage

```html
<script type="module">
  import '@interzero/popup/wc';
</script>

<iz-popup></iz-popup>
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
