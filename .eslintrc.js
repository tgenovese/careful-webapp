module.exports = {
  extends: [
    'tge'
  ],
  env: {
    browser: true
  },
  globals: {
    angular: false,
    FastClick: false,
    moment: false
  },
  "rules": {
    // vm for "view model" is common in angular apps
    'consistent-this': [2, 'self', 'vm']
  }
};
