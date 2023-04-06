# @interzero-global/header

## Properties
--
## Event table 
| name | type | description | 
|------|------|-------------|
| `"change"` | `ChangeEvent` | triggers when clicking on home button or when some of the user-options has been pressed |


## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--header-height"` | `CSS unit` | `60px` | controls the height of header |
| `"--header-gap"` | `CSS unit` | `0.5rem` | controls the flex-gap of header |
| `"--header-background-color"` | `Color` | `#fcfcfc` | controls the background-color of header |
| `"--header-padding"` | `CSS padding` | `1rem` | controls the padding of the header | 
| `"--header-color"` | `Color` | var(--colors-neutral-black, black) | controls the icon-home color | 


## Types 
```typescript
interface ChangeEvent {
  type: "home-button"|"user-menu";
  value: string;
}
```

## Translations
### UserMenu
| text | description |
|------|-------------|
| *"Logout"* | Used inside option 1 |
| *"User Profile"* | Used inside option 2 |



This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero-global/header
```

## Usage

```html
<script type="module">
  import '@interzero-global/header/wc';
</script>

<iz-global-header></iz-global-header>
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
