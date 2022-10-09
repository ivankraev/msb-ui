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

[Conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) is checked by husky.

To commit your changes, use

```bash
$ yarn commit
```

Every commit should be tagged, so after you commit the changes, run the script

```bash
$ yarn release
```

It will automatically bump up the version, update it in package.json and create notes in 
the CHANGELOG.md file.

We can push our changes with the following script

```bash
$ git push --follow-tags <remote> <branchname>
```



