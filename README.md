# Angular Standards

Common standards for a fresh Angular CLI (1.6.0+) project.

## Installation

Install the package using the following command

```
npm install zream-angular-standards --save-dev
```

## Available Configurations

### TypeScript

Add the following keys to the root `tsconfig.json` file:

```json
{
  "extends": "./node_modules/zream-angular-standards/config/tsconfig.json",
  ...
}
```

### TSLint / Codelyzer

Replace the contents of the root `tslint.json` file with the following:

```json
{
  "extends": [
    "zream-angular-standards/config/tslint"
  ],
  "rules": {
    "component-selector": [
      true,
      "element",
      ["app"],
      "kebab-case"
    ],
    "directive-selector": [
      true,
      "attribute",
      ["app"],
      "camelCase"
    ],
    "pipe-naming": [
      true,
      "camelCase",
      "app"
    ]
  }
}
```

### Stylelint

Add a root `.stylelintrc.json` file with the following contents:

```json
{
  "extends": "zream-angular-standards/config/stylelint",
  "rules": {}
}
```

Then replace the "`lint`" script in your `package.json` file with the following script:

```json
"lint": "ng lint && stylelint \"src/**/*.scss\""
```

## Development

### Release

To release a new version, make sure there are no pending changes. Then run the following commands:

```
npm run release
```
This will bump version, tag release, and publish to npm.

Run the following to update the remote repository
```
git push --follow-tags origin master
```
