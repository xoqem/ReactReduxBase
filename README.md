# ReactReduxBase
Boilerplate for a react / redux project with some opinionated decisions on other libraries for handling styling, etc.  All of the decisions were necessarily best practice, so reference at your own peril.  It is just the product of me wanting to experiment with tying together various libraries and ways of doing things.

## Libraries Used

Webpack for bundle creation and the HTML plugin for it to generate the index file.  Babel for es6 / react syntax.  React for components.  Redux for state management.  React-JSS for styling.  Theming for setting up themes to use with react-jss.  Yahoo's intl-messageformat for parsing localized messages.  Lodash for some util methods.

I haven't setup proper testing yet, but eslint is used for basic syntax checking for now.

## Dependencies

If you haven't installed yarn on your system, do that first: https://yarnpkg.com

Install dependencies with yarn:

```
yarn install
```


## Development

### Webpack Dev Server

Creates a webpack dev server and watches for changes:

```
yarn start
```

Open http://localhost:8080/ in a browser.


### Watch

Have webpack watch for changes and automatically rebuild with:

```
yarn watch
```

Open dist/index.html in a browser.


### Manually building

Build the project:

```
yarn build
```

Open dist/index.html in a browser.
