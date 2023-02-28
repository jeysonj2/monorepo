# @interzero-global/loginpage

## Translations 
| key | component | use-case |
|-----|-----------|----------|
| `"Must be a valid E-Mail"` | LoginForm | validation message of valid email for `"Email-Field"` |
| `"You have to provide a E-Mail"` | LoginForm | validation message of require for `"Email-Field"` |
| `"Email"` | LoginForm | label for `"Email-Field"` |
| `"example@interzero.de"` | LoginForm | placeholder for `"Email-Field"` |
| `"Password is too short minimum 5 charactures"` | LoginForm | validation message when too short for `"Password-Field"` |
| `"Passwords must match"` | LoginForm | validation message when not matching `"Password-Field"` for `"Re-Password-Field"` |
| `"You must provide a password"` | LoginForm | validation message of require for both `"Password-Field"` & `"Re-Password-Field"` |
| `"Password"` | LoginForm | label for `"Password-Field"` |
| `"Re-enter Password"` | LoginForm | label for `"Re-Password-Field"` |
| `"type password"` | LoginForm | placeholder for both `"Password-Field"` & `"Re-Password-Field"` |
| `"REGISTER"` | LoginForm | button text for register button |
| `"LOGIN"` | LoginForm | button text for login button |
| `"UPDATE"` | LoginForm | button text for update button (when passwords are updating) |
| `"RESET"` | LoginForm | button text for reset button (when forgot password) |
| `"Forgot Password?"` | LoginForm | link text for forget password (from login variant) |
| `"Remembered it?"` | LoginForm | link text for login form (from reset variant) |
| `"INTERZERO"` | LoginLinks | link text for interzero official website |
| `"KONTAKT"` | LoginLinks | link text for interzero contact page |
| `"© 2022 - Interzero Circular Solutions Germany Gmbh"` | LoginLinks | trademark text |

### Complete Use case (english)
Retared use case:
```typescript
window.izTranslations.load({
  id: "en",
  name: "english",
  flag: "🇬🇧",
  translations: {
    "Must be a valid E-Mail": "Must be a valid E-Mail",
    "You have to provide a E-Mail": "You have to provide a E-Mail",
    "Email": "Email",
    "example@interzero.de": "example@interzero.de",
    "Password is too short minimum 5 charactures": "Password is too short minimum 5 charactures",
    "Passwords must match": "Passwords must match",
    "You must provide a password": "You must provide a password",
    "Password": "Password",
    "Re-enter Password": "Re-enter Password",
    "type password": "type password",
    "REGISTER": "REGISTER",
    "LOGIN": "LOGIN",
    "UPDATE": "UPDATE",
    "RESET": "RESET",
    "Forgot Password?": "Forgot Password?",
    "Remembered it?": "Remembered it?",
    "INTERZERO": "INTERZERO",
    "KONTAKT": "KONTAKT",
    "© 2022 - Interzero Circular Solutions Germany Gmbh": "© 2022 - Interzero Circular Solutions Germany Gmbh",
  }
});
```
Actual use case (for english)
```typescript
window.izTranslations.load({
  id: "en",
  name: "english",
  flag: "🇬🇧",
  translations: {}
});
```

## Events
| name | type | description |
|------|------|-------------|
| `"submit"` | SubmitEvent | dispatched whenever Form is submitted | 

## Types 
### Variant 
```typescript 
  type Variant = "login"|"register"|"update"|"reset";
```
### SubmitEvent
```typescript 
type SubmitEvent = { 
  data: FormData; 
  variant: Variant;
}
```

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero-global/loginpage
```

## Usage

```html
<script type="module">
  import '@interzero-global/loginpage/wc';
</script>

<iz-global-loginpage></iz-global-loginpage>
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
