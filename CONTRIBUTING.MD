# Contributing

As a contributor, here are the guidelines we would like you to follow:

- [Branch strategy](#branch-strategy)
- [Branch naming conventions](#branch-naming-conventions)
- [Commit message conventions](#commit-message-conventions)
- [Development workflow](#development-workflow)
- [Semantic versioning](#semantic-versioning)

## <a name="branch-strategy"></a> Branch strategy

We have a simple branch organization to keep everything organized. We have three main default branches `main`, `develop` and `staging`; and three folders: `feature`, `bugfix` and `hotfix`. Here is what each one is used for:

- `Develop` branch: This branch contains all changes already on production; and the features have been passed the approval process to be released. O nly one commit per feature is added to this branch to make it easier to understand and track progress.

- `Main` branch: This branch contains all changes that have been deployed to production.

- `Staging` branch: It provides an additional level of quality control by allowing for more comprehensive testing and review. It is the last step before the code is officially released in production.

- `Feature` folder: This folder contains all the branches that are currently being developed or are waiting to be released. When a developer starts to work on a new feature, they must create a new branch in this folder based on ‘develop’ branch.

- `Bugfix` folder: This folder contains all branches that are being used to fix bugs or issues that are not breaking any main functionality and can wait to be solved on next releases. Each time that a developer starts to work on a new bugfix, it must create a new branch in this folder based on ‘develop’ branch.

- `hotfix` folder: This folder contains all branches open to attend high-priority bugs on production that are affecting the core of the business and it needs to be solved as soon as possible. When a high priority bug appears, the developer must create a new branch based on ‘main’ branch to fix it.

This way of organizing branches makes it easy for developers to understand and navigate through the code. They will know exactly where to go to find the code for a specific feature, bugfix or hotfix, as well as what has been deployed and where.

## <a name="branch-naming-conventions"></a> Branch naming conventions

We recommend using lower cases and dashes instead of spaces when naming branches: We also suggest following this naming convention: `[ticket-number]-[short ticket name]`

For example: CA1120-short-ticket-name

This way makes it easy to recognize the purpose of each branch, as well as its corresponding ticket number. It also helps in tracking the progress of the tickets, and in identifying the bugs or features related to the branch.

## <a name="commit-message-conventions"></a> Commit message conventions

Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Type

Must be one of the following:

- `build:` Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `ci:` Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `docs:` Documentation only changes
- `feat:` A new feature
- `fix:` A bug fix
- `perf:` A code change that improves performance
- `refactor:` A code change that neither fixes a bug nor adds a feature
- `style:` Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `test:` Adding missing tests or correcting existing tests
- `chore:` maintaining

### Scope `(optional)`

The following is the list of supported scopes:

- component
- ui
- css
- api
- `packaging`: used for changes that change the npm package layout in all of our packages, e.g. public path changes, package.json changes done to all packages, d.ts file/format changes, changes to bundles, etc.
- `changelog`: used for updating the release notes in CHANGELOG.md
- `devtools`:

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Body `(optional)`

Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

### Footer `(optional)`

The footer can contain information about breaking changes and deprecations and is also the place to reference issue tracker, and other PRs that this commit closes or is related to.

For example:

```
feat(component): Summarize changes in around 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together

Further paragraphs come after blank lines

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here

BREAKING CHANGE: isolate scope bindings definition has changed and
the inject option for the directive controller injection was removed.

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: PMP-39, PMP-45
See also: PMP-12
```

## <a name="development-workflow"></a> Development workflow (Coming Soon!)

### Feature

### Bugs

### Merge Request

## <a name="semantic-versioning"></a> Semantic versioning

This project adheres to the [semantic versioning](https://semver.org/) system. We release updates in the form of patch versions for crucial bug fixes, minor versions for the addition of new features or non-critical changes, and major versions for any modifications that break existing functionality.
