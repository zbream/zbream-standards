# zbream-standards

Common standards for Typescript-based projects.
Includes configurations for the following scenarios:

* TypeScript-based NodeJS project
* TypeScript-based Angular (>=10.0.0) project, usually CLI-based 

## Installation

Install the package using the following command:

```
npm install zbream-standards --save-dev
```

Depending on the desired configurations, some of the following peer dependencies may need installed:

```
tslint codelyzer stylelint stylelint-config-standard
```

## TypeScript (NodeJS) Project

The following instructions are intended for NodeJS-based TypeScript projects, not part of an Angular project.

### Automatic Setup

Included is a command-line utility to simplify adding the configurations below:

```
./node_modules/.bin/zbream-standards add node
  - or -
npx zbream-standards add node
```

### TypeScript

Add the following key to the root `tsconfig.json` file:

```json
{
  "extends": "./node_modules/zbream-standards/config/node/tsconfig.json",
  ...
}
```

### TSLint

Add the following key to the root `tslint.json` file:

```json
{
  "extends": [
    "zbream-standards/config/node/tslint"
  ],
  "rules": {}
}
```

## Angular Project

The following instructions are intended for Angular (>=8.0.0) projects, typically part of a CLI project.

### Automatic Setup

Included is a command-line utility to simplify adding the configurations below:

```
./node_modules/.bin/zbream-standards add angular
  - or -
npx zbream-standards add angular
```

### TypeScript

Add the following key to the root `tsconfig.json` file:

```json
{
  "extends": "./node_modules/zbream-standards/config/angular/tsconfig.json",
  ...
}
```

### TSLint / Codelyzer

Replace the contents of the root `tslint.json` file with the following:

```json
{
  "extends": [
    "zbream-standards/config/angular/tslint"
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
    "pipe-prefix": {
      "options": [
        "app"
      ]
    }
  }
}
```

The `"rules"` section should be copied into each individual project's `tslint.json` file, as these are project-specific.

### Stylelint

Add a root `.stylelintrc.json` file with the following contents:

```json
{
  "extends": "zbream-standards/config/angular/stylelint",
  "rules": {}
}
```

Then replace the `"lint"` script in the root `package.json` with the following scripts:

```json
"lint": "npm run lint:ts && npm run lint:style",
"lint:ts": "ng lint",
"lint:style": "stylelint \"@(src|projects)/**/*.?(s)css\"",
```

## Development

### Release

To release a new version, make sure there are no pending changes. Then run the following commands:

```
npm run clean
npm run build

# one-of
npm version minor
npm version patch
npm version prerelease --preid beta

npm publish
```

This will build, bump version, tag release, and publish to npm.

Run the following to update the remote repository

```
git push --follow-tags origin master
```
