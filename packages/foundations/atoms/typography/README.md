# @interzero/typography

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @interzero/typography
```

## Usage

```html
<script type="module">
  import '@interzero/typography/wc';
</script>

<iz-typography></iz-typography>
```

## CSS variables
| name | description | default-value | 
|------|-------------|---------------|
| `"--typography-color"` | color for the text | `"black"` |
| `"--typography-font-family"` | font family applied to most cases | `"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"` |
| `"--typography-logo-font-family"` | font family applied only to the logo variant | same as `"--typography-font-family"` |
| `"--typography-font-size"` | font size for default variant | `"initial"` |
| `"--typography-heading-font-size"` | font size for heading variant | `"initial"` |
| `"--typography-logo-font-size"` | font size for logo variant | `"initial"` |
¨

| Name                                           | Type    | Default Value | Description                                                                                                                                                        |
| ---------------------------------------------- | ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--default-typography-font-family`             | `string` | `'Inter', sans-serif` | Default font family for all typography elements                                                                                                            |
| `--typography-color`                           | `color` | `black`       | Default text color for all typography elements                                                                                                                     |
| `--typography-display`                         | `string` | `block`       | Default display value for all typography elements                                                                                                                  |
| `--typography-body-font-size`                  | `length` | `12px`        | Font size for `body` variant `p` element                                                                                                                     |
| `--typography-body-line-height`                | `length` | `15px`        | Line height for `body` variant `p` element                                                                                                                  |
| `--default-typography-body-font-weight`        | `number` | `400`         | Default font weight for `body` variant `p` element                                                                                                          |
| `--default-typography-body-font-family`        | `string` | `"Inter"`     | Default font family for `body` variant `p` element                                                                                                          |
| `--typography-label-font-size`                 | `length` | `13px`        | Font size for `label` variant `p` element                                                                                                                    |
| `--typography-label-line-height`               | `length` | `16px`        | Line height for `label` variant `p` element                                                                                                                 |
| `--default-typography-label-font-weight`       | `number` | `400`         | Default font weight for `label` variant `p` element                                                                                                         |
| `--default-typography-label-font-family`       | `string` | `"Inter"`     | Default font family for `label` variant `p` element                                                                                                         |
| `--typography-help-font-size`                  | `length` | `9px`         | Font size for `help` variant `p` element                                                                                                                     |
| `--typography-help-line-height`                | `length` | `10px`        | Line height for `help` variant `p` element                                                                                                                  |
| `--default-typography-help-font-weight`        | `number` | `400`         | Default font weight for `help` variant `p` element                                                                                                          |
| `--default-typography-help-font-family`        | `string` | `"Inter"`     | Default font family for `help` variant `p` element                                                                                                          |
| `--typography-heading-font-size`               | `length` | `20px`        | Font size for `heading` variant `h1` element                                                                                                                 |
| `--typography-heading-line-height`             | `length` | `24px`        | Line height for `heading` variant `h1` element                                                                                                              |
| `--default-typography-heading-font-weight`     | `number` | `400`         | Default font weight for `heading` variant `h1` element                                                                                                      |
| `--default-typography-heading-font-family`     | `string` | `"Inter"`     | Default font family for `heading` variant `h1` element                                                                                                      |
| `--typography-logo-font-size`                  | `length` | `36px`        | Font size for `logo` variant `h1` element                                                                                                                    |
| `--typography-logo-line-height`                | `length` | `44


| Variable Name	| Default Value |	Description |
|---------------|---------------|-------------|
| `"--default-typography-font-family"`	| `"'Inter', sans-serif"` |	The default font family for typography |
| `"--typography-color"`	| `"black"` |	The default color for typography |
| `"--typography-body-font-size"`	| `"12px"` |	The font size for paragraphs with class "body" |
| `"--typography-body-line-height"`	| `"15px"` |	The line height for paragraphs with class "body" |
| `"--default-typography-body-font-weight"`	| `"400"` |	The default font weight for paragraphs with class "body" |
| `"--default-typography-body-font-family"`	| `""Inter""` |	The default font family for paragraphs with class "body" |
| `"--typography-label-font-size"`	| `"13px"` |	The font size for paragraphs with class "label" |
| `"--typography-label-line-height"`	| `"16px"` |	The line height for paragraphs with class "label" |
| `"--default-typography-label-font-weight"`	| `"400"` |	The default font weight for paragraphs with class "label" |
| `"--default-typography-label-font-family"`	| `""Inter""` |	The default font family for paragraphs with class "label" |
| `"--typography-help-font-size"`	| `"9px"` |	The font size for paragraphs with class "help" |
| `"--typography-help-line-height"`	| `"10px"` |	The line height for paragraphs with class "help" |
| `"--default-typography-help-font-weight"`	| `"400"` |	The default font weight for paragraphs with class "help" |
| `"--default-typography-help-font-family"`	| `""Inter""` |	The default font family for paragraphs with class "help" |
| `"--typography-heading-font-size"`	| `"20px"` |	The font size for headings with class "heading" |
| `"--typography-heading-line-height"`	| `"24px"` |	The line height for headings with class "heading" |
| `"--default-typography-heading-font-weight"`	| `"400"` |	The default font weight for headings with class "heading" |
| `"--default-typography-heading-font-family"`	| `""Inter""` |	The default font family for headings with class "heading" |
| `"--typography-logo-font-size"`	| `"36px"` |	The font size for headings with class "logo" |
| `"--typography-logo-line-height"`	| `"44px"` |	The line height for headings with class "logo" |
| `"--default-typography-logo-font-weight"`	| `"600"` |	The default font weight for headings with class "logo" |
| `"--default-typography-logo-font-family"`	| `""Inter""` |	The default font family for headings with class "logo" |
| `"--typography-logob-font-weight"`	| `"400"` |	The font weight for headings with class "logob" |
| `"--typography-logob-font-family"`	| `""Inter""` |	The font family for headings with class "logob" |
| `"--typography-logob-font-size"`	| `"14px"` |	The font size for headings with class "logob" |
| `"--typography-logob-line-height"`	| `"17px"` |	The line height for headings with class "logob" |
| `"--typography-logob-letter-spacing"`	| `"0.06em"` |	The letter spacing for headings with class "logob" |

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
