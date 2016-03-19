module.exports = {
  env: {
    mocha: true,
    node: true
  },
  globals: {
    expect: false
  },
  rules: {
    // Don't warn for expressions like expect(var).to.be.undefined;
    'no-unused-expressions': 0,
    // Add a trailing underscore to vars or args to suppress 'unused' warning
    'no-unused-vars': [2, {
      vars: 'all',
      args: 'after-used',
      varsIgnorePattern: '_$',
      argsIgnorePattern: '_$'
    }],
    // No need in tests
    'require-jsdoc': 0,
    // describe blocks are easier to read with blank lines
    'padded-blocks': 0
  }
};
