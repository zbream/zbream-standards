// This configuration includes only rules external to the tslint-recommended configuration.

module.exports = {
  "extends": [
    "tslint:recommended"
  ],
  "rules": {

    // TypeScript
    "arrow-parens": false,
    "deprecation": {
      "severity": "warn"
    },
    "import-blacklist": {
      "options": [
        "rxjs/Rx"
      ]
    },
    "indent": {
      "options": [
        "spaces",
        2
      ]
    },
    "interface-name": false,
    "max-line-length": {
      "options": [
        140
      ]
    },
    "member-access": {
      "options": [
        "no-public"
      ]
    },
    "member-ordering": {
      "options": [{
        "order": [
          "static-field",
          "instance-field",
          "static-method",
          "instance-method"
        ]
      }]
    },
    "no-console": {
      "options": [
        "debug",
        "info",
        "time",
        "timeEnd",
        "trace"
      ]
    },
    "no-duplicate-imports": true,
    "no-empty": false,
    "no-inferrable-types": {
      "options": [
        "ignore-params"
      ]
    },
    "no-null-keyword": true,
    "no-switch-case-fall-through": true,
    "object-literal-sort-keys": false,
    "quotemark": {
      "options": [
        "single"
      ]
    },
    "unified-signatures": true,
    "variable-name": {
      "options": [
        "check-format",
        "allow-leading-underscore",
        "ban-keywords"
      ]
    },
    "whitespace": {
      "options": [
        "check-branch",
        "check-decl",
        "check-module",
        "check-operator",
        "check-rest-spread",
        "check-separator",
        "check-type",
        "check-typecast",
        "check-type-operator",
        "check-preblock"
      ]
    }
  }
};
