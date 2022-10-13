# MSP HUB
> **NodeJS version: 16.17.0**

* **[React](https://facebook.github.io/react/)** (18.x)
* **[Redux-toolkit](https://redux-toolkit.js.org/)** (1.x)
* **[Webpack](https://webpack.js.org/)** (5.x)
* **[Typescript](https://www.typescriptlang.org/)** (*)
* **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** + [Fast Refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin)
* Image support ([Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader))
* [SASS](http://sass-lang.com/) support
* Code linting ([ESLint](https://github.com/eslint/eslint)) and formatting ([Prettier](https://github.com/prettier/prettier))
* Test frameworks ([Jest](https://facebook.github.io/jest/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro))

## Structure

	.
	├── docs                       # Documentation files
	├── .husky                     # Husky scripts files
	├── public
	├── src                        # Source files
	│   ├── assets                 # Assets (fonts etc.)
	│   ├── routes
	│   │   ├── main.ts            # Routes list
	│   ├── components             # React components
	│   ├── features               # Redux logic for any functional feature
	│   ├── hooks                  # Shared hooks
	│   ├── redux                  # Redux root folder
	│   ├── theme                  # Application theme files
	│   │   ├── variables.scss     # Common styles variables
	│   │   ├── styles.scss        # Shared styles classes
	├── configs                    # Configuration files
	│   ├── webpack                # Webpack configuration
	│   ├── jest.json              # Jest configuration
	└── README.md
> Modules can be resolved using absolute path alias @msp (e.g "@msp/routes/main")

## Responsive breakpoints

Breakpoint | Width
--- | ---
Tiny screen | 576px
Small screen | 768px
Medium screen | 992px
Large screen | 1200px

## Prerequisites

```bash
$ yarn install
```
**All commands**

Command | Description
--- | ---
`yarn start-dev` | Build app continuously (HMR enabled) and serve @ `http://localhost:3000`
`yarn start-prod` | Build app once (HMR disabled) to `/dist/`
`yarn build` | Build app to `/dist/`
`yarn test` | Run tests
`yarn lint` | Run linter
`yarn format` | Run linter and fix issues
`yarn start` | (alias of `yarn start-dev`)


## Commit

To commit your changes, use

```bash
$ yarn commit
```

## Semantic versioning

- fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
types other than fix: build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.

- feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).

- BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.

For more information, please check [Conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)

Every commit should be tagged, so after you commit the changes, run the script

- Patch

```bash
$ yarn release:patch
```

- Minor

```bash
$ yarn release:minor
```

- Major

```bash
$ yarn release:major
```

It will automatically bump up the version, update it in package.json and create notes in
the CHANGELOG.md file.

If you want to check how your release will look like without actually
applying it you can add --dry-run after the command.

We can push our changes with the following script

```bash
$ git push --follow-tags <remote> <branchname>
```
