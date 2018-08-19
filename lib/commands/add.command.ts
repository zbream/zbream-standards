import * as path from 'path';

import { fileBackup, fileCopy, fileRead, fileWrite } from '../utils/file';
import { projectRoot, templateRoot } from '../utils/paths';

export interface AddNodeCommandConfig {
  addTypescript: boolean;
  addTslint: boolean;
}

export interface AddAngularCommandConfig {
  addTypescript: boolean;
  addTslint: boolean;
  addStylelint: boolean;
}

export async function runAddNodeCommand(config: AddNodeCommandConfig) {
  const projectPath = projectRoot;
  const templatePath = path.join(templateRoot, 'node');
  if (config.addTypescript) {
    try {
      await addTypescript(projectPath, templatePath);
      console.log('Added TypeScript configuration successfully.');
    } catch (err) {
      console.error('Error adding TypeScript configuration: ', err);
    }
  }
  if (config.addTslint) {
    try {
      await addTslint(projectPath, templatePath);
      console.log('Added TSLint configuration successfully.');
    } catch (err) {
      console.error('Error adding TSLint configuration: ', err);
    }
  }
}

export async function runAddAngularCommand(config: AddAngularCommandConfig) {
  const projectPath = projectRoot;
  const templatePath = path.join(templateRoot, 'angular');
  if (config.addTypescript) {
    try {
      await addTypescript(projectPath, templatePath);
      console.log('Added TypeScript configuration successfully.');
    } catch (err) {
      console.error('Error adding TypeScript configuration: ', err);
    }
  }
  if (config.addTslint) {
    try {
      await addTslint(projectPath, templatePath);
      console.log('Added TSLint configuration successfully.');
    } catch (err) {
      console.error('Error adding TSLint configuration: ', err);
    }
  }
  if (config.addStylelint) {
    try {
      await addStylelint(projectPath, templatePath);
      console.log('Added Stylelint configuration successfully.');
    } catch (err) {
      console.error('Error adding Stylelint configuration: ', err);
    }
  }
}

/**
 * Add TypeScript configuration to the project.
 *
 * - add an *extends* property to the **tsconfig.json**
 */
async function addTypescript(projectPath: string, templatePath: string): Promise<void> {
  const templateTsconfigPath = path.resolve(templatePath, 'tsconfig.json');
  const projectTsconfigPath = path.resolve(projectPath, 'tsconfig.json');

  const templateTsconfig = JSON.parse(await fileRead(templateTsconfigPath));
  const projectTsconfig = JSON.parse(await fileRead(projectTsconfigPath));

  const tsconfig = Object.assign(templateTsconfig, projectTsconfig);

  await fileBackup(projectTsconfigPath);
  await fileWrite(projectTsconfigPath, formatPackageJson(tsconfig));
}

/**
 * Add TSLint configuration to the project.
 *
 * - make a backup of **tslint.json**, if one exists
 * - copy **tslint.json** from package templates
 */
async function addTslint(projectPath: string, templatePath: string): Promise<void> {
  const templateTslintPath = path.resolve(templatePath, 'tslint.json');
  const projectTslintPath = path.resolve(projectPath, 'tslint.json');

  await fileBackup(projectTslintPath);
  await fileCopy(templateTslintPath, projectTslintPath);
}

/**
 * Add StyleLint configuration to the project.
 *
 * - make a backup of **.stylelintrc.json**, if one exists
 * - copy **.stylelintrc.json** from package templates
 * - update scripts in **package.json**
 */
async function addStylelint(projectPath: string, templatePath: string): Promise<void> {
  const templateStylelintPath = path.resolve(templatePath, '.stylelintrc.json');
  const projectStylelintPath = path.resolve(projectPath, '.stylelintrc.json');

  // save a backup
  await fileBackup(projectStylelintPath);
  await fileCopy(templateStylelintPath, projectStylelintPath);

  // update package.json scripts
  const projectPackageJsonPath = path.resolve(projectPath, 'package.json');
  const projectPackageJson = JSON.parse(await fileRead(projectPackageJsonPath));

  Object.assign(projectPackageJson.scripts, {
    'lint': 'npm run lint:ts && npm run lint:style',
    'lint:ts': 'ng lint',
    'lint:style': 'stylelint "@(src|projects)/**/*.?(s)css"',
  });

  await fileBackup(projectPackageJsonPath);
  await fileWrite(projectPackageJsonPath, formatPackageJson(projectPackageJson));
}

function formatPackageJson(packageJson: any): string {
  return JSON.stringify(packageJson, undefined, 2);
}
