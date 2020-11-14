// This configuration is forked from the following:
// - TSLint 5.x.x recommended: https://github.com/palantir/tslint/blob/5.20.1/src/configs/recommended.ts
//   - This is before 6.x.x removed opinionated "annoying" rules in the following PRs:
//       https://github.com/palantir/tslint/pull/4312
//       https://github.com/palantir/tslint/pull/4871
// - Angular CLI defaults: https://github.com/angular/angular-cli/blob/v11.0.0/packages/schematics/angular/workspace/files/tslint.json.template
// - My overrides (marked ZR)

module.exports = {
  "extends": [
    "tslint:recommended"
  ],
  "rules": {

    // TypeScript
    "adjacent-overload-signatures": true,
    "align": {
      "options": [
        "parameters",
        "statements"
      ]
    },
    "array-type": {
      "options": [
        "array-simple" // ZR
      ]
    },
    "arrow-parens": false, // ZR
    "arrow-return-shorthand": true,
    "ban-types": {
      "options": [
          ["Object", "Avoid using the `Object` type. Did you mean `object`?"],
          ["Function", "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."],
          ["Boolean", "Avoid using the `Boolean` type. Did you mean `boolean`?"],
          ["Number", "Avoid using the `Number` type. Did you mean `number`?"],
          ["String", "Avoid using the `String` type. Did you mean `string`?"],
          ["Symbol", "Avoid using the `Symbol` type. Did you mean `symbol`?"]
      ]
    },
    "callable-types": true,
    "class-name": true,
    "comment-format": {
      "options": [
        "check-space"
      ]
    },
    "curly": true,
    "deprecation": {
      "severity": "warning"
    },
    "eofline": true,
    "forin": true,
    "import-blacklist": {
      "options": [
        "rxjs/Rx"
      ]
    },
    "import-spacing": true,
    "indent": {
      "options": [
        "spaces",
        2
      ]
    },
    "interface-name": false, // ZR
    "interface-over-type-literal": true,
    "jsdoc-format": true,
    "label-position": true,
    "max-classes-per-file": {
      "options": [
        1
      ]
    },
    "max-line-length": {
      "options": [
        140
      ]
    },
    "member-access": {
      "options": [
        "no-public" // ZR
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
    "new-parens": true,
    "no-angle-bracket-type-assertion": true,
    "no-arg": true,
    "no-bitwise": true,
    "no-conditional-assignment": true,
    "no-consecutive-blank-lines": true,
    "no-console": {
      "options": [
        "debug",
        "info",
        "time",
        "timeEnd",
        "trace"
      ]
    },
    "no-construct": true,
    "no-debugger": true,
    "no-duplicate-imports": true, // ZR
    "no-duplicate-super": true,
    "no-empty": false,
    "no-empty-interface": true,
    "no-eval": true,
    "no-inferrable-types": {
      "options": [
        "ignore-params"
      ]
    },
    "no-internal-module": true,
    "no-misused-new": true,
    "no-namespace": true,
    "no-non-null-assertion": false, // ZR
    "no-null-keyword": true, // ZR
    "no-redundant-jsdoc": false, // ZR
    "no-reference": true,
    "no-reference-import": true,
    "no-shadowed-variable": true,
    "no-string-literal": true,
    "no-string-throw": true,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": true,
    "no-unnecessary-initializer": true,
    "no-unsafe-finally": true,
    "no-unused-expression": true,
    "no-var-keyword": true,
    "no-var-requires": true, // ZR
    "object-literal-key-quotes": {
      "options": "consistent-as-needed" // ZR
    },
    "object-literal-shorthand": true,
    "object-literal-sort-keys": false, // ZR
    "one-line": {
      "options": [
        "check-catch",
        "check-else",
        "check-finally",
        "check-open-brace",
        "check-whitespace"
      ]
    },
    "one-variable-per-declaration": {
      "options": [
        "ignore-for-loop"
      ]
    },
    "only-arrow-functions": {
      "options": [
        "allow-declarations",
        "allow-named-functions"
      ]
    },
    "ordered-imports": {
      "options": {
        "import-sources-order": "case-insensitive",
        "module-source-path": "full",
        "named-imports-order": "case-insensitive"
      }
    },
    "prefer-const": true,
    "prefer-for-of": true,
    "quotemark": {
      "options": [
        "single"
      ]
    },
    "radix": true,
    "semicolon": {
      "options": [
        "always"
      ]
    },
    "space-before-function-paren": {
      "options": {
        "anonymous": "never",
        "asyncArrow": "always",
        "constructor": "never",
        "method": "never",
        "named": "never"
      }
    },
    "trailing-comma": {
      "options": {
        "esSpecCompliant": true,
        "multiline": "always",
        "singleline": "never"
      }
    },
    "triple-equals": {
      "options": [
        "allow-null-check"
      ]
    },
    "typedef": false, // ZR
    "typedef-whitespace": {
      "options": [
        {
          "call-signature": "nospace",
          "index-signature": "nospace",
          "parameter": "nospace",
          "property-declaration": "nospace",
          "variable-declaration": "nospace"
        },
        {
          "call-signature": "onespace",
          "index-signature": "onespace",
          "parameter": "onespace",
          "property-declaration": "onespace",
          "variable-declaration": "onespace"
        }
      ]
    },
    "unified-signatures": true,
    "use-isnan": true,
    "variable-name": {
      "options": [
        "ban-keywords",
        "check-format",
        "allow-pascal-case",
        "allow-leading-underscore" // ZR
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
