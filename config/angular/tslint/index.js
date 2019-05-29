module.exports = {
  "extends": [
    "../../node/tslint"
  ],
  "rulesDirectory": [
    "codelyzer"
  ],
  "rules": {

    // Codelyzer
    "component-class-suffix": {
      "options": [
        "Component",
        "View",
        "Dialog"
      ]
    },
    "contextual-lifecycle": true,
    "directive-class-suffix": true,
    "no-conflicting-lifecycle": true,
    "no-host-metadata-property": true,
    "no-input-rename": true,
    "no-inputs-metadata-property": true,
    "no-output-native": true,
    "no-output-on-prefix": true,
    "no-output-rename": true,
    "no-outputs-metadata-property": true,
    "template-banana-in-box": true,
    "template-no-negated-async": true,
    "use-lifecycle-interface": true,
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
    "pipe-prefix": {
      "options": [
        "app"
      ]
    }
  }
};
