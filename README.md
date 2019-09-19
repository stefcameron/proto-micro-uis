# proto-micro-uis

Prototype for microservice UIs using https://single-spa.js.org to compose them.

# Installation

First, [install yarn](https://yarnpkg.com/en/docs/install). Then, from the repository root,

```bash
$ yarn install
$ yarn build
$ yarn start
```

This will open a new window in Chrome Canary (if installed) to http://localhost:3000 with the main UI app loaded. You can then use the various routes to see the other UIs load (they are lazy-loaded when their respective links are clicked).

# Layout

## /app1

App built with React and Rollup. Has external dependencies on typical React libraries.

## /app2

App built with Vue and Webpack. Has external dependencies on typical Vue libraries.

## /main

Main app built with React and Webpack.

This app loads the two others as micro-UIs.

