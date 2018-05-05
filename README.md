# Angular Standards

Common standards for a fresh Angular CLI (>=6.0.0) project.

## Installation

Install the package using the following command

```
npm install zream-angular-standards --save-dev
```

## Available Configurations

### TypeScript

Add the following key to the root `tsconfig.json` file:

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

Then replace the "`lint`" script in your `package.json` file with the following scripts:

```json
"lint": "npm run lint:ts && npm run lint:style",
"lint:ts": "ng lint",
"lint:style": "stylelint \"@(src|projects)/**/*.?(s)css\"",
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
