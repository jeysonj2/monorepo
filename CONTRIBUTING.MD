# Contributing

As a contributor, here are the guidelines we would like you to follow:

- [Contributing](#contributing)
- [Branch strategy](#branch-strategy)
- [Branch naming conventions](#branch-naming-conventions)
- [Commit message conventions](#commit-message-conventions)
  - [Types](#types)
  - [Scope `(optional)`](#scope-optional)
  - [Subject](#subject)
  - [Body `(optional)`](#body-optional)
  - [Footer `(optional)`](#footer-optional)
  - [Commit message conventions example](#commit-message-conventions-example)
- [Semantic versioning](#semantic-versioning)
- [Development workflow](#development-workflow)
  - [Feature/Fix](#featurefix)
  - [Merge Request](#merge-request)
- [Process to deploy on producction server](#process-to-deploy-on-producction-server)
- [Definition of Done (DoD) of a Product increment (feature/fix)](#definition-of-done-dod-of-a-product-increment-featurefix)
  - [Build \& Deployment](#build--deployment)

# Branch strategy

We have one single branch which contains the latest stable code called `main`.  Direct push to this branch is not allowed,
so, in order to update the stable code, we need to follow the [Process to deploy on producction server](#process-to-deploy-on-producction-server) process.

We also have 3 folders that contains the current on going work:

- `feature`: This folder contains all the feature branches that are currently being develop or are waiting to be merged. When a developer starts to work on a new feature, they must create a new branch in this folder taking `main` as the base branch.  In some cases, one feature depends on another feature in progress, in those cases the child branch could be rebased using the parent feature branch as the base.
(please also refer to [Branch naming conventions](#branch-naming-conventions))

- `bugfix`: This folder contains all branches that are being used to fix bugs or issues. Each time that a developer starts to work on a new bugfix, they must create a new branch in this folder based on `main` branch.
(please also refer to [Branch naming conventions](#branch-naming-conventions))

This way of organizing branches makes it easy for developers to understand and navigate through the code. They will know exactly where to go and find the code for a specific feature or bugfix, as well as what has been deployed and when.

# Branch naming conventions

We recommend using lower cases and dashes instead of spaces when naming branches: We also suggest following this naming convention: `[ticket-number]-[short ticket description]`

For example: WC101-button-component-creation

This way makes it easy to recognize the purpose of each branch, as well as its corresponding ticket number. It also helps in tracking the progress of the tickets, and in identifying the bugs or features related to the branch.

# Commit message conventions

For this section we suggest to follow the [Conventional Commits](https://www.conventionalcommits.org/).

> The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with [SemVer](https://semver.org/), by describing the features, fixes, and breaking changes made in commit messages.

Each commit message consists of a header, body and footer. The header has a special format that includes a type, a scope and a subject:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

## Types

Must be one of the following:

- `feat:` A new feature
- `fix:` A bug or hot fix
- `refactor:` A code change that neither fixes a bug nor adds a feature
- `style:` Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `test:` Adding missing tests or correcting existing tests
- `story:` storybook related commits
- `docs:` Documentation only changes
- `chore:` maintaining
- `build:` Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `ci:` Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `perf:` A code change that improves performance

## Scope `(optional)`

The following is the list of supported scopes:

- `@org/package-name`: e.i.: @interzero/button
- `component`
- `ui`
- `css`
- `api`
- `packaging`: used for changes that change the npm package layout in all of our packages, e.g. public path changes, package.json changes done to all packages, d.ts file/format changes, changes to bundles, etc.
- `changelog`: used for updating the release notes in CHANGELOG.md
- `devtools`

## Subject

The subject contains a short description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Do not capitalize the first letter
- No dot (.) at the end

## Body `(optional)`

Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

## Footer `(optional)`

The footer can contain information about breaking changes and deprecations and is also the place to reference issue tracker, and other PRs that this commit closes or is related to.

A commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.

## Commit message conventions example

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

# Semantic versioning

This project adheres to the [semantic versioning](https://semver.org/) system. We release updates in the form of patch versions for crucial bug fixes, minor versions for the addition of new features or non-critical changes, and major versions for any modifications that break existing functionality.

# Development workflow
*TBD*

## Feature/Fix
*TBD*

## Merge Request

- Prepare the branch before creating the merge request
  - Locally all the commits in a feature/fix branch must be squashed into one commit (`git rebase -i [COMMIT HASH / BRANCH]`). Please also refer to [Commit message conventions example](#commit-message-conventions-example).
  - To be sure the feature/fix branch is up to date with the `main` branch.
    - `git checkout main`
    - `git pull`
    - `git checkout [feature/fix branch]`
    - `git rebase -i main`
- Create the merge request in the [git website](http://git/software-development/price-management-portal/interzero-web-components/-/merge_requests)
  - The title and description fields are usually filled out automatically using the commit message
  - Please select the default template for the description field and fill out all the topics.  The aim of this template is to inform and guide the reviewers about the feature/fix they need to check and approve, and to prevent unmeaningful discussions/meetings during the review process
- The merge request must be assigned to a person in charge (TBD: PO? SCRUM Master?)
- The code must be reviewed and approved by at least 1 developer
- Once the code is reviewed and approved, only the assigned person (TBD) can merge the code into the `main` branch

> **NOTE**: on every feedback/correction/comment during the merge request process, the branch to be merged must follow all the steps again.

# Process to deploy on producction server
*TBD*

# Definition of Done (DoD) of a Product increment (feature/fix)

The Definition of Done (DoD) is a clear and concise set of criteria that outlines the requirements that must be met before a feature or fix can be considered complete.

The following are to points included in the DoD:

- `Design definitions (UI/UX)`: The product increment must have a design definition which contains, for example: the styling, specifications, variations, etc.
This has to be validated by the designer team, developer team and stakeholders involved.
- `Acceptance criteria met`: The product increment must be checked and approved by the Product Owner (PO) to consider that met the acceptance criteria.
- `Code review`: The product increment must be reviewed/approved by at least 1 developer different of the code author.
- `Format & lint`: All the code must pass the rules for formatting and linting.
- `Unit tests`: The product increment must contain and pass the tests of the main functionalities (desired coverage percentage is 70%).
- `Storybook & documentation`: The product increment must contain the proper documentation and storybook of the main functionalities.
  It must include also a code example of how to use it in a React project (Typescript and Javascript).
- `OK from the team`: includes designers, developers, PO, etc.
- `Continuous integration`: is passing and working.

## Build & Deployment
*TBD*
