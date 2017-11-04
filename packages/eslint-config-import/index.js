module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb-base/rules/import",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "import",
  ],
  "rules": {
    "import/newline-after-import": 0,
  },
};
