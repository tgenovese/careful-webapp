// Protractor configuration

'use strict';

require('./support/chai-plugins.js');

module.exports.config = {

  // ---------------------------------------------------------------------------
  // ----- How to connect to Browser Drivers -----------------------------------
  // ---------------------------------------------------------------------------

  // Protractor will connect directly to the browser Drivers at the locations
  // specified by chromeDriver and firefoxPath. Only Chrome and Firefox are
  // supported for direct connect.
  directConnect: true,

  // ---------------------------------------------------------------------------
  // ----- What tests to run ---------------------------------------------------
  // ---------------------------------------------------------------------------

  // When run without a command line parameter, all suites will run.
  //
  // If run with --suite=foo or --suite=foo,bar only the patterns matched
  // by the specified suites will run.
  //
  // Spec patterns are relative to the location of this config.
  suites: {
    // foo: 'e2e/foo/*.test.js',
    // bar: 'e2e/bar/*.test.js',
    unclassified: 'e2e/*.test.js'
  },

  // ---------------------------------------------------------------------------
  // ----- How to set up browsers ----------------------------------------------
  // ---------------------------------------------------------------------------
  //
  // Protractor can launch your tests on one or more browsers. If you are
  // testing on a single browser, use the capabilities option. If you are
  // testing on multiple browsers, use the multiCapabilities array.
  //
  // For a list of available capabilities, see
  // https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
  multiCapabilities: [{browserName: 'chrome'}],

  // ---------------------------------------------------------------------------
  // ----- Global test information ---------------------------------------------
  // ---------------------------------------------------------------------------
  //
  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be resolved against this URL (via url.resolve)
  baseUrl: 'http://localhost:8079',

  // ---------------------------------------------------------------------------
  // ----- The test framework --------------------------------------------------
  // ---------------------------------------------------------------------------

  // Test framework to use.
  framework: 'mocha',

  // Options to be passed to Mocha.
  //
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: 'bdd',
    reporter: 'list'
  }
};
