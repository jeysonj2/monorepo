# @interzero-global/user-menu


Category: `Global/Atom`

## Property Table
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"placement"` | `Placement` | "bottom-left" | controls placement of menu-menu |

## Event Table
| name | type | description |
|------|-------------|------|-------------|
| `"change"` | `CustomEvent<ChangeEvent>` | dispatched whenever option is selected |

## CSS variables Table
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--user-menu-button-width"` | `CSS unit` | `"3rem"` | controls the width of the menu button |

## Translation
| text | description |
|------|-------------|
| *"Logout"* | Used inside option 1 |
| *"User Profile"* | Used inside option 2 |


## Types 
### Popover
```typescript
type Placement = "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center" | "left-top" | "left-bottom" | "left-center" | "right-top" | "right-bottom" | "right-center"
```

### MenuItem
```typescript
type ChangeEvent = {
    value: "logout" | "user-profile";
    name: "user-menu";
};
```

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero-global/user-menu
```

## Usage

```html
<script type="module">
  import '@interzero-global/user-menu/wc';
</script>

<iz-global-user-menu></iz-global-user-menu>
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
