# p5-typescript-template

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

```shell
npm run lint:ts
```

`npm run lint:ts` will lint the TypeScript source code using ESlint, identifying syntactic and stylistic errors based on a configured set of rules.
TypeScript linting configurations and rules can be found, edited, and updated in `eslint.config.ts.mjs`.

```shell
npm run lint:js
```

`npm run lint:js` will lint the JavaScript configuration files using ESlint, identifying syntactic and stylistic errors based on a configured set of rules.
JavaScript linting configurations and rules can be found, edited, and updated in `eslint.config.js.mjs`.

## Building

```shell
npm run build:dev
```

`npm run build:dev` will bundle your sketch in development mode using webpack.
This should identify any compiler errors present in your source code.

```shell
npm run build:prod
```

`npm run build:prod` will create a production-ready bundle of the source code.

## Serving

```shell
npm run dev
```

`npm run dev` will bundle the sketch in development mode, start a localhost development server (`127.0.0.1:8080`), and open a new browser window for the `index.html` file bundled with the compiled sketch.

# GitHub Workflows

This template contains GitHub workflows designed to update project dependencies and scan the code for security vulnerabilities every month.

To learn more about Dependabot configurations, visit the
[GitHub Dependabot documentation](https://docs.github.com/en/code-security/dependabot).

To learn more about CodeQL configurations, visit the
[GitHub CodeQL documentation](https://codeql.github.com/docs/).

[![CodeQL](https://github.com/brittni-and-the-polar-bear/p5-typescript-template/actions/workflows/codeql.yml/badge.svg)](https://github.com/brittni-and-the-polar-bear/p5-typescript-template/actions/workflows/codeql.yml)
[![Node.js Build](https://github.com/brittni-and-the-polar-bear/p5-typescript-template/actions/workflows/node-js.yml/badge.svg)](https://github.com/brittni-and-the-polar-bear/p5-typescript-template/actions/workflows/node-js.yml)

# Attributions

The favicon.ico of this template was designed by
[Freepik from Flaticon](https://www.flaticon.com/free-icons/art).
You can find the original icon on
[flaticon.com](https://www.flaticon.com/free-icon/art_1756752?term=art&page=1&position=38&origin=search&related_id=1756752).

# LICENSE

This project is licensed under the MIT License.
The full text of the license is included with this source code.
