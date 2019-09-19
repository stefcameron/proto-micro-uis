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

App built with React and Rollup. Has external dependencies on typical React libraries. Includes sub-routes, also using React Router.

## /app2

App built with Vue and Webpack. Has external dependencies on typical Vue libraries.

## /main

Main app built with React and Webpack.

This app loads the two others as micro-UIs.

# Observations

The problem with approach this is that it doesn't enable you to load one app into another. Each app __must__ have its own separate mount point in the `DOM`. So you can still define a header, nav bar, footer, and main content, which are all separate apps built with different frameworks, but your index.html page must define that layout with empty `DOM` nodes that single-spa will then mount as a result of dynamically loading (via dynamic import statements) those apps.

This is great if you truly have "microservice UIs" where each UI team/service is free to use whatever tech stack they want to build their part of the overall UI. But it comes at the cost of fine grained integration into the main app.

This is also a good solution if you're needing to migrate to a completely different tech stack, say from an Angular-based stack to a React-based stack, and you don't have time to do a complete rewrite. You can create a new main React app, and then pull-in pieces of your Angular app using `single-spa` until you've finally rewritten all parts in React.

It solves one type of use case, but not quite the one I was after, which is one main app that consumes components either based on routes (which could be lazy-loaded if properly bundled by, say, `Webpack`) or based on direct imports, where each 'component' is effectively a 'micro-ui'.

And that's been done before! It's just a regular app that has code with import statements that import other third-party components. Nothing different. Each component/micro-ui, however, should be able to stand on its own as a mini app, fulfilling a functional aspect of the greater application.

Assuming __all__ components/micro-uis are written using the same tech stack, then there are no _technical_ integration problems since there's only one framework at play, and `single-spa` isn't needed.

The composition _magic_ therefore becomes a function of the UX, not the UI (i.e. where and when do we show component X?).
