# Microservice Framework

A template for a NodeJS based REST API backend. Based in ES6. 

**Requirements**
-  [NodeJS](https://nodejs.org/en/)

## Startup

First install package dependencies via:

```
npm i
```

Then run:

```
npm start
```

## Scripts

There are four scripts in the solution: 

```
  "scripts": {
    "start": "cross-env NODE_PATH=src node ./src/server.js",
    "test": "nyc --reporter=html --reporter=text cross-env NODE_PATH=src mocha ./tests/*.js",
    "start-dev": "cross-env NODE_PATH=src nodemon ./src/server.js",
    "eslint-check" :"cross-env NODE_PATH=src eslint src/*.js src/*/*.js tests/*.js --fix"
  }
```

To run a custom script (such as start or test), use:

```
npm run-script start-dev
```

-	start: this is the script we should use in the release.
-	test: runs all tests and creates a coverage report.
-	start-dev: starts up the solution for development. Uses nodemon to track changes and restarts the app when the app is saved. This is **not** in the regular start because nodemon triggers a restart when **anything** is saved. Thus the app would fall over briefly to restart should the app ever be altered in the server. Whilst unlikely, we should remove the risk entirely.
-	eslint-check: runs eslint checks on **all** .js files. 

## Testing

The application uses the [Mocha](https://mochajs.org/) framework for testing. All tests should sit inside the /tests folder. To run tests, use:

```
npm test
```

Tests produce a coverage report using the **[nyc](https://www.npmjs.com/package/nyc)** package. Coverage generates a set of HTML, CSS and JavaScript files which can be viewed in a browser. They are located under the /coverage folder once tests are ran.

## Styling and maintenance

Utilises Airbnb eslint base for styling. To run styling checks, first install eslint:

```
npm i -g eslint
```

Then run:

```
eslint *my file(s)*
```

Whenever the app is committed to the repository, a number of pre-commits are ran:

```
 "pre-commit": [
    "test",
    "eslint-check"
  ]
```

Both tests and all eslint issues should be fixed before committing back to the repository. 