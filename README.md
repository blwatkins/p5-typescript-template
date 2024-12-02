# p5-typescript-template

A template project for using
[p5.js](https://p5js.org/)
with
[TypeScript](https://www.typescriptlang.org/)
and
[Webpack](https://webpack.js.org/).

# Getting Started

Create a new project from this template using the green "Use this template" button above.

Write the project's source code in the `src/` directory.
The `src/sketch.ts` file provided contains a simple p5.js program with a black background and a white circle.
This file will be used as the entry point for the bundler.

```shell
npm run lint
```

`npm run lint` will lint the source code, identifying syntactic and stylistic errors based on a configured set of rules.
Linting configurations and rules can be found, edited, and updated in `eslint.config.mjs`.

```shell
npm run build
```

`npm run build` will bundle your sketch in development mode.
This should identify any compiler errors present in your source code.

```shell
npm run dev
```

`npm run dev` will bundle the sketch in development mode,
start a localhost development server (127.0.0.1:8080),
and open a new browser window for the `index.html` file bundled with the compiled sketch.

```shell
npm run prod
```

`npm run prod` will create a production-ready bundle of the source code.

# GitHub Workflows

This template contains GitHub workflows designed to update project dependencies monthly.
To learn more about dependabot configurations, visit the
[GitHub Dependabot documentation](https://docs.github.com/en/code-security/dependabot).

# Attributions

The favicon.ico of this template was designed by
[Freepik from Flaticon](https://www.flaticon.com/free-icons/art).
You can find the original icon on
[flaticon.com](https://www.flaticon.com/free-icon/art_1756752?term=art&page=1&position=38&origin=search&related_id=1756752).

# LICENSE

The source code of this project is licensed under the
[GNU Affero General Public Version 3.0 License](https://www.gnu.org/licenses/agpl-3.0.en.html).
The full text of the license is included with this source code.
