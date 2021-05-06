# React Quickstart by [@sachie](https://github.com/sachie)

This is a minimal react skeleton, to help you get started on a project quickly, with as little new learning as possible.
It has commonly used code styling rules, auto formatting, SCSS modules and a minimal redux setup (check the feature list below for more information). You can simply clone-build-run and start adding your code, without spending time on setting up coding standards or a folder structure.

Built on top of the latest create-react-app, as of May 2021, with the following module versions:

- react: **^17.0.2**
- react-scripts (CRA): **4.0.3**
- react-router-dom: **^5.2.0**
- redux: **^4.0.5**
- eslint: **^7.25.0**

[Node >= 10.16 and npm >= 5.6](https://nodejs.org/en/) are required on your environment, as specified by [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app).

&nbsp;

## How to use

1. `git clone git@github.com:sachie/react-quickstart.git <YOUR_PROJECT_NAME>`
2. `cd <YOUR_PROJECT_NAME>`
3. `yarn` or `npm i`
4. `yarn start` or `npm start`

Then add some reducers, sagas, and pages to the site, as needed.
Check the code comments for tips and explanations.

&nbsp;

## Features

- **_Latest react and create-react-app_**, and all the advantages they bring, including Fast Refresh, the new JSX Transform, better support for upgrading react, eslint 7 support, and more.

- **_Clear file structure_** to separate out your pages, shared components, HOCs, service wrappers, constants and texts.

- **_CSS Modules_** to avoid classname clashing and neatly organize stylesheets. Learn more about CSS modules [here](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/). Shared/global styles and scss variables can go in `/src/assets/styles`. Basic examples of modules, variables and class combing are included.

- **_Eslint, Stylelint, Prettier_** and comprehensive configs for each, to lint all your files **as you code**, and keep a consistent coding style within the project. Some highlights include: automatic import verification and sorting, clear tag spacing, filename checking, css animation performance and browser-unsupported feature checking, etc.

- **_Additional scripts_** for lint checking and fixing with ease, as well as the default scripts created by CRA.

- **_Pre-commit hooks_** with [husky](https://github.com/typicode/husky) 6 to run your tests or check for lint, before committing/pushing code. If you're having trouble with using the pre-commit hooks, or if you're using **Yarn 2**, check the [husky documentation](https://typicode.github.io/husky/#/?id=automatic-recommended).

- **_Absolute imports_** to prevent loads of `../../` import statements.

- **_Redux structure_** with a minimal store setup and connection. (Can be removed easily if it's not needed)

- **_Works with both NPM and Yarn_** as the scripts use [ultra-runner](https://github.com/folke/ultra-runner). Just remove the `yarn.lock` file if you're using `npm`.

&nbsp;

## What's not included

- No comprehensive redux examples, such as component specific reducers/sagas, etc. As different developers have different preferences for this structure, and some might opt out of redux completely.

- No testing examples, but the required testing libraries are already included as dependencies, so once tests are written, they can be run using the `test` script.

- No server side rendering setup.

- No containerization or infra configuration.

&nbsp;

## Scripts

**Note: `npm` or `npm run` can be used instead of `yarn` if preferred**
&nbsp;

- **`yarn start`** - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

- **`yarn test`** - Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- **`yarn build`** - Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

- **`yarn eject`** - Ejects the create-react-app configurations (webpack, Babel, ESLint, etc.) into your project as dependencies in `package.json`. Should be used if the provided configurations aren't working for you.

- **`yarn lint`** - Runs eslint, stylelint and prettier checks, but **does not** fix any issues.

- **`yarn lint:fix`** - Runs eslint, stylelint and prettier checks, and fixes possible issues. Some issues might still require manual fixing.

The following scripts are also included if the linters need to be used separately.

**`eslint, eslint:fix, stylelint, stylelint:fix, prettier, prettier:fix`**

&nbsp;

## Discussions and Contributions

For any questions, suggestions or comments, please use the github discussions section.
If you have an improvement to submit, feel free to open a PR.

&nbsp;

## License

This project is licensed under the MIT license, Copyright (c) 2021 Sachindra C. Ariyasinghe. For more information check the `LICENSE` file.
