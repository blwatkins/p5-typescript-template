# p5.js TypeScript Template

A template project for using [p5.js](https://p5js.org/) with [TypeScript](https://www.typescriptlang.org/) and [webpack](https://webpack.js.org/).
Webpack runs in the [Node.js](https://nodejs.org/en) runtime environment to bundle the sketch for execution in a web browser.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Linting](#linting)
    - [Linting TypeScript](#linting-typescript)
    - [Linting JavaScript](#linting-javascript)
  - [Building the Bundle](#building-the-bundle)
    - [Building the Bundle in Development Mode](#building-the-bundle-in-development-mode)
    - [Building the Bundle in Production Mode](#building-the-bundle-in-production-mode)
  - [Serving the Bundle](#serving-the-bundle)
    - [Serving the Development Bundle](#serving-the-development-bundle)
    - [Serving the Production Bundle](#serving-the-production-bundle)
- [GitHub Workflows](#github-workflows)
- [Repository Status Badges](#repository-status-badges)
- [Attributions](#attributions)
  - [Favicon](#favicon)
- [License](#license)
- [Thank Yous](#thank-yous)

## Getting Started

Create a new project from this template using the green "Use this template" button above.

Write the project's source code in the `src/` directory.
The `src/sketch.ts` file provided contains a simple p5.js program with a black background and a white circle.
This file will be used as the entry point for webpack.

### Installation

```shell
npm install
```

`npm install` will install all the dependencies required to run this project.

### Linting

#### Linting TypeScript

```shell
npm run lint:ts
```

`npm run lint:ts` will lint the TypeScript source code using ESLint, identifying syntactic and stylistic errors based on a configured set of rules.
TypeScript linting configurations and rules can be found, edited, and updated in `eslint.config.ts.mjs`.

#### Linting JavaScript

```shell
npm run lint:js
```

`npm run lint:js` will lint the JavaScript configuration files using ESLint, identifying syntactic and stylistic errors based on a configured set of rules.
JavaScript linting configurations and rules can be found, edited, and updated in `eslint.config.js.mjs`.

### Building the Bundle

#### Building the Bundle in Development Mode

```shell
npm run build:dev
```

`npm run build:dev` will bundle your sketch in development mode using webpack.
This should identify any compiler errors present in your source code.
The webpack build configuration can be found in `webpack.config.mjs`.

#### Building the Bundle in Production Mode

```shell
npm run build
```

`npm run build` will bundle your sketch in production mode using webpack.
The webpack build configuration can be found in `webpack.config.mjs`.

### Serving the Bundle

#### Serving the Development Bundle

```shell
npm run serve:dev
```

`npm run serve:dev` will bundle the scene in development mode, start a localhost development server (`127.0.0.1:8080`), and open a new browser window for the `index.html` file bundled with the compiled scene.

#### Serving the Production Bundle

```shell
npm run serve
```

`npm run serve` will bundle the scene in production mode, start a localhost development server (`127.0.0.1:8080`), and open a new browser window for the `index.html` file bundled with the compiled scene.

## GitHub Workflows

This template contains GitHub workflows designed to update project dependencies and scan the code for security vulnerabilities every month.

To learn more about Dependabot configurations, visit the [GitHub Dependabot documentation](https://docs.github.com/en/code-security/concepts/supply-chain-security/about-dependabot-alerts).

To learn more about CodeQL configurations, visit the [GitHub CodeQL documentation](https://codeql.github.com/docs/).

[![CodeQL](https://github.com/blwatkins/p5-webpack-typescript-template/actions/workflows/codeql.yml/badge.svg)](https://github.com/blwatkins/p5-webpack-typescript-template/actions/workflows/codeql.yml)
[![npm Build](https://github.com/blwatkins/p5-webpack-typescript-template/actions/workflows/npm-build.yml/badge.svg)](https://github.com/blwatkins/p5-webpack-typescript-template/actions/workflows/npm-build.yml)

## Repository Status Badges

![GitHub License](https://img.shields.io/github/license/blwatkins/p5-webpack-typescript-template)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/blwatkins/p5-webpack-typescript-template)
![GitHub last commit](https://img.shields.io/github/last-commit/blwatkins/p5-webpack-typescript-template)
![GitHub contributors](https://img.shields.io/github/contributors-anon/blwatkins/p5-webpack-typescript-template)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/blwatkins/p5-webpack-typescript-template)
![GitHub repo file or directory count](https://img.shields.io/github/directory-file-count/blwatkins/p5-webpack-typescript-template)
![GitHub language count](https://img.shields.io/github/languages/count/blwatkins/p5-webpack-typescript-template)

## Attributions

### Favicon

The favicon for this template project is an artist palette emoji, which is used to represent creativity and artistic expression.
The favicon was generated from the Artist Palette emoji using [Favicon Generator](https://favicon.io/).

This favicon was generated using the following graphics from Twitter Twemoji:
- Graphics Title: 1f3a8.svg
- Graphics Author: Copyright 2020 Twitter, Inc and other contributors (https://github.com/twitter/twemoji)
- Graphics Source: https://github.com/twitter/twemoji/blob/master/assets/svg/1f3a8.svg
- Graphics License: CC-BY 4.0 (https://creativecommons.org/licenses/by/4.0/)

## License

The source code of this project is licensed under the [MIT License](https://opensource.org/license/mit).
The full text of the license is included with the package source code.

## Thank Yous

A huge thank you to all the open source contributors who have made this project possible by creating and maintaining the libraries and tools used in this template, and to the open source community for fostering collaboration and innovation.

A special thank you to all the educators, mentors, and content creators who have shared their knowledge and expertise in the fields of web development and computer science.
Thank you for giving me the tools, resources, opportunities, support, and inspiration to learn and grow as a developer.

----

Copyright &copy; 2023-2026 Brittni Watkins.
