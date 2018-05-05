// This configuration includes only rules external to the tslint-recommended configuration.

module.exports = {
  "extends": [
    "tslint:recommended"
  ],
  "rulesDirectory": [
    "codelyzer"
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
    "no-use-before-declare": true,
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
    },

    // Codelyzer
    "angular-whitespace": {
      "options": [
        "check-interpolation",
        // TODO: likely to be removed https://github.com/mgechev/codelyzer/issues/460
        // "check-pipe",
        "check-semicolon"
      ]
    },
    "banana-in-box": true,
    "component-class-suffix": {
      "options": [
        "Component",
        "View"
      ]
    },
    "directive-class-suffix": true,
    "no-attribute-parameter-decorator": true,
    "no-forward-ref": true,
    "no-input-rename": true,
    "no-output-on-prefix": true,
    "no-output-rename": true,
    "use-host-property-decorator": true,
    "use-input-property-decorator": true,
    "use-life-cycle-interface": true,
    "use-output-property-decorator": true,
    "use-pipe-decorator": true,
    "use-pipe-transform-interface": true,

    // Codelyzer (the application should override these)
    "component-selector": {
      "options": [
        "element",
        ["app"],
        "kebab-case"
      ]
    },
    "directive-selector": {
      "options": [
        "attribute",
        ["app"],
        "camelCase"
      ]
    },
    "pipe-naming": {
      "options": [
        "camelCase",
        "app"
      ]
    }
  }
};
