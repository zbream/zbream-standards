module.exports = {
  extends: [
    "tslint:recommended"
  ],
  rulesDirectory: [
    "codelyzer"
  ],
  rules: {

    // TypeScript
    "arrow-parens": false,
    "import-blacklist": [
      true,
      "rxjs",
      "rxjs/Rx"
    ],
    "indent": [
      true,
      "spaces",
      2
    ],
    "interface-name": false,
    "max-line-length": [
      true,
      140
    ],
    "member-access": [
      true,
      "no-public"
    ],
    "member-ordering": [
      true,
      {
        "order": [
          "static-field",
          "instance-field",
          "static-method",
          "instance-method"
        ]
      }
    ],
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-duplicate-imports": true,
    "no-empty": false,
    "no-inferrable-types": [
      true,
      "ignore-params"
    ],
    "no-null-keyword": true,
    "no-switch-case-fall-through": true,
    "object-literal-sort-keys": false,
    "quotemark": [
      true,
      "single"
    ],
    "variable-name": [
      true,
      "check-format",
      "allow-leading-underscore",
      "ban-keywords"
    ],
    "whitespace": [
      true,
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
    ],

    // Codelyzer
    "angular-whitespace": [
      true,
      "check-interpolation",
      // TODO: readd after https://github.com/mgechev/codelyzer/issues/412
      // "check-pipe",
      "check-semicolon"
    ],
    "banana-in-box": true,
    "component-class-suffix": [
      true,
      "Component",
      "View"
    ],
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

    // Codelyzer (expect an override)
    "component-selector": [
      true,
      "element",
      [
        "app"
      ],
      "kebab-case"
    ],
    "directive-selector": [
      true,
      "attribute",
      [
        "app"
      ],
      "camelCase"
    ],
    "pipe-naming": [
      true,
      "camelCase",
      "app"
    ]
  }
};
