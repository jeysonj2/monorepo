# @interzero-pmp/flow-roadmap

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"answers"` | `"Answer[]"` | `[]` | `false` | displayes the selected answers for navigation |

## Events
| name | type | description |
|------|------|-------------|
| `"select"` | `"CustomEvent<Answer>"` | triggered when a answer is selected (for navigation purpose) |

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--flow-roadmap-gap"` | `"CSS unit"` | `0.5rem` | controls the gap between the buttons |
| `"--flow-roadmap-line-width"` | `"CSS unit"` | `2px` | controls the seperator line-width |
| `"--flow-roadmap-line-color"` | `"Color"` | `gray` | controls the seperator line color |
| `"--flow-roadmap-line-left"` | `"CSS unit"` | `3rem` | controls the position of the seperator line | 
| `"--flow-roadmap-line-left-end"` | `"CSS unit"` | `50%` | controls the position of the seperator when class="end" |

## Types
```typescript
type Answer = {
  question: string;
  option: string;
  questionId: string | 'final-screen';
  optionid: string;
};
```

## Translations
- Overview Screen


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero-pmp/flow-roadmap
```

## Usage

```html
<script type="module">
  import '@interzero-pmp/flow-roadmap/wc';
</script>

<iz-pmp-flow-roadmap></iz-pmp-flow-roadmap>
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
