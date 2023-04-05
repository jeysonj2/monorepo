# @interzero-pmp/page-template

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"userData"` | `"UserModel"` | `false` | the user entity (from backend) |

## Events
| name | type | description |
|------|------|-------------|
| `"change"` | `"CustomEvent<ChangeEvent>"` | triggered whenever something from header is triggered or one of the menu-value are selected |

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--max-page-height"` | `"CSS unit"` | `100vh` | a "global" value for max heights of pages |

## Types
```typescript
type Role = 'user' | 'admin';
type MenuType = 'administration';
type ChangeType = HeaderChangeType | MenuType;
type ChangeEvent = {
  type: ChangeType;
  value: string;
};
interface UserModel {
  role: Role;
}
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


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero-pmp/page-template
```

## Usage

```html
<script type="module">
  import '@interzero-pmp/page-template/wc';
</script>

<iz-pmp-page-template></iz-pmp-page-template>
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
