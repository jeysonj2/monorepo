# @interzero-global/login-form

NOTE: this should get changed and replaced by a dynamic form instead

## Properties
| name | type | default-value | required | description |
|------|------|---------------|----------|-------------|
| `"variant"` | `Variant` | `"login`" | `false` | controls which view to display |
| `"passwordMinlength"` | `number` | `5` | `false` | controls the password rule |

## CSS variables
| name | type | default-value | description |
|------|------|---------------|-------------|
| `"--login-form-column-gap"` | `CSS unit` | `2rem` | controls the column gap |
| `"--login-form-row-gap"` | `CSS unit` | `2rem` | controls the row gap |

## Types
```typescript
type Variant = 'login' | 'register' | 'update' | 'reset';
type SubmitEvent = { data: FormData; variant: Variant };
```

## Translations 
| key | description |
|-----|-------------|
| `"Must be a valid E-Mail"` | validation message of valid email for `"Email-Field"` |
| `"You have to provide a E-Mail"` | validation message of require for `"Email-Field"` |
| `"Email"` | label for `"Email-Field"` |
| `"You have to provide the First Name"` | when value missing field of first name |
| `"You have to provide the Last Name"` | when value missing field of last name |
| `"example@interzero.de"` | placeholder for `"Email-Field"` |
| `"Password is too short minimum 5 charactures"` | validation message when too short for `"Password-Field"` |
| `"Passwords must match"` | validation message when not matching `"Password-Field"` for `"Re-Password-Field"` |
| `"You must provide a password"` | validation message of require for both `"Password-Field"` & `"Re-Password-Field"` |
| `"Password"` | label for `"Password-Field"` |
| `"Re-enter Password"` | label for `"Re-Password-Field"` |
| `"type password"` | placeholder for both `"Password-Field"` & `"Re-Password-Field"` |
| `"REGISTER"` | button text for register button |
| `"LOGIN"` | button text for login button |
| `"UPDATE"` | button text for update button (when passwords are updating) |
| `"RESET"` | button text for reset button (when forgot password) |
| `"Forgot Password?"` | link text for forget password (from login variant) |
| `"Remembered it?"` | link text for login form (from reset variant) |


This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero-global/login-form
```

## Usage

```html
<script type="module">
  import '@interzero-global/login-form/wc';
</script>

<iz-global-login-form></iz-global-login-form>
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
