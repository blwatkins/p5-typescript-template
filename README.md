# p5.js TypeScript Template

A template project for using
[p5.js](https://p5js.org/)
with
[TypeScript](https://www.typescriptlang.org/)
and
[webpack](https://webpack.js.org/).

# Getting Started

Create a new project from this template using the green "Use this template" button above.

Write the project's source code in the `src/` directory.
The `src/sketch.ts` file provided contains a simple p5.js program with a black background and a white circle.
This file will be used as the entry point for webpack.

## Installation

```shell
npm install
```

`npm install` will install all the dependencies required to run this project.

## Linting

### Linting TypeScript

```shell
npm run lint:ts
```

`npm run lint:ts` will lint the TypeScript source code using ESLint, identifying syntactic and stylistic errors based on a configured set of rules.
TypeScript linting configurations and rules can be found, edited, and updated in `eslint.config.ts.mjs`.

### Linting JavaScript

```shell
npm run lint:js
```

`npm run lint:js` will lint the JavaScript configuration files using ESLint, identifying syntactic and stylistic errors based on a configured set of rules.
JavaScript linting configurations and rules can be found, edited, and updated in `eslint.config.js.mjs`.

## Building

### Development Mode

```shell
npm run build:dev
```

`npm run build:dev` will bundle your sketch in development mode using webpack.
This should identify any compiler errors present in your source code.
The webpack build configuration can be found in `webpack.config.cjs`.

### Production Mode

```shell
npm run build:prod
```

`npm run build:prod` will bundle your sketch in production mode using webpack.
The webpack build configuration can be found in `webpack.config.cjs`.

### Development Mode with Single File Output

```shell
npm run build:dev:single-file
```

`npm run build:dev:single-file` will bundle your sketch in development mode using webpack.
The resulting bundle will have your source code and all its dependencies in a single JavaScript file.
This should identify any compiler errors present in your source code.
The webpack build configuration can be found in `webpack.single-file.config.cjs`.

### Production Mode with Single File Output

```shell
npm run build:prod:single-file
```

`npm run build:prod:single-file` will bundle your sketch in production mode using webpack.
The resulting bundle will have your source code and all its dependencies in a single JavaScript file.
The webpack build configuration can be found in `webpack.single-file.config.cjs`.

## Serving

### Serving the Development Bundle

```shell
npm run dev
```

`npm run dev` will bundle the sketch in development mode, start a localhost development server (`127.0.0.1:8080`), and open a new browser window for the `index.html` file bundled with the compiled sketch.

### Serving the Development Bundle with Single File Output

```shell
npm run dev:single-file
```

`npm run dev:single-file` will bundle the sketch in development mode with `webpack.single-file.config.cjs`, start a localhost development server (`127.0.0.1:8080`), and open a new browser window for the `index.html` file bundled with the compiled sketch.

### Serving the Production Bundle

```shell
npm run dev:prod
```

`npm run dev:prod` will bundle the sketch in production mode, start a localhost development server (`127.0.0.1:8080`), and open a new browser window for the `index.html` file bundled with the compiled sketch.

### Serving the Production Bundle with Single File Output

```shell
npm run dev:prod:single-file
```

`npm run dev:prod:single-file` will bundle the sketch in production mode with `webpack.single-file.config.cjs`, start a localhost development server (`127.0.0.1:8080`), and open a new browser window for the `index.html` file bundled with the compiled sketch.

# GitHub Workflows

This template contains GitHub workflows designed to update project dependencies and scan the code for security vulnerabilities every month.

To learn more about Dependabot configurations, visit the
[GitHub Dependabot documentation](https://docs.github.com/en/code-security/dependabot).

To learn more about CodeQL configurations, visit the
[GitHub CodeQL documentation](https://codeql.github.com/docs/).

[![CodeQL](https://github.com/brittni-and-the-polar-bear/p5-typescript-template/actions/workflows/codeql.yml/badge.svg)](https://github.com/brittni-and-the-polar-bear/p5-typescript-template/actions/workflows/codeql.yml)
[![npm Build](https://github.com/brittni-and-the-polar-bear/p5-typescript-template/actions/workflows/npm-build.yml/badge.svg)](https://github.com/brittni-and-the-polar-bear/p5-typescript-template/actions/workflows/npm-build.yml)

# Attributions

The favicon.ico of this template was designed by
[Freepik from Flaticon](https://www.flaticon.com/free-icons/art).
You can find the original icon on
[flaticon.com](https://www.flaticon.com/free-icon/art_1756752?term=art&page=1&position=38&origin=search&related_id=1756752).

# LICENSE

This project is licensed under the MIT License.
The full text of the license is included with this source code.

----

Copyright &copy; 2024-2025 brittni and the polar bear LLC.
