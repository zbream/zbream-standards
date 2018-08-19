module.exports = {
  "extends": [
    "../../node/tslint"
  ],
  "rulesDirectory": [
    "codelyzer"
  ],
  "rules": {

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
