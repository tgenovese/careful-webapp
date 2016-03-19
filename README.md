# careful-webapp

Web front-end for the "Careful" application, powered by [Foundation for Apps](http://foundation.zurb.com/apps.html) and [AngularJS](https://angularjs.org/).

Also used during development:
- [Chai](http://chaijs.com) for the test assertions
- [Mocha](http://mochajs.org) as the test framework
- [Karma](http://karma-runner.github.io) to run unit tests in browsers

## Get Started

Install the dependencies:

```bash
npm install
```

While you're working on your project, run:

```bash
npm run dev
```

This will compile the Sass and assemble the Angular app. The appropriate Gulp task will run on any change to source files in the `client` folder.

**Now go to `localhost:8079` in your browser to see it in action.**

To run the compiling process once, without watching any files, use the `build` command.

```bash
npm run build
```

## Unit Testing

Run the unit tests once:

```bash
npm test
```

Watch the source and test files and run the unit tests on changes:

```bash
npm run tdd
```
