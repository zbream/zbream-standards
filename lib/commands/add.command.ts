import * as path from 'path';

import { projectRoot, templateRoot } from '../utils/paths';
import { fileCopy, fileRename, fileRead, fileWrite } from '../utils/file';

interface AddCommandConfig {
  addTypescript: boolean;
  addTslint: boolean;
  addStylelint: boolean;
}

export async function runAddCommand(config: AddCommandConfig) {
  if (config.addTypescript) {
    try {
      await addTypescript();
      console.log('Added TypeScript configuration successfully.');
    } catch (err) {
      console.error('Error adding TypeScript configuration: ', err);
    }
  }
  if (config.addTslint) {
    try {
      await addTslint();
      console.log('Added TSLint configuration successfully.');
    } catch (err) {
      console.error('Error adding TSLint configuration: ', err);
    }
  }
  if (config.addStylelint) {
    try {
      await addStylelint();
      console.log('Added StyleLint configuration successfully.');
    } catch (err) {
      console.error('Error adding StyleLint configuration: ', err);
    }
  }
}

/**
 * Add TypeScript configuration to the project.
 *
 * - add an *extends* property to the **tsconfig.json**
 */
async function addTypescript(): Promise<void> {
  const templateTsconfigPath = path.resolve(templateRoot, 'tsconfig.json');
  const projectTsconfigPath = path.resolve(projectRoot, 'tsconfig.json');

  const templateTsconfig = JSON.parse(await fileRead(templateTsconfigPath));
  const projectTsconfig = JSON.parse(await fileRead(projectTsconfigPath));

  const tsconfig = Object.assign(templateTsconfig, projectTsconfig);

  await fileWrite(projectTsconfigPath, formatPackageJson(tsconfig));
}

/**
 * Add TSLint configuration to the project.
 *
 * - make a backup of **tslint.json**, if one exists
 * - copy **tslint.json** from package templates
 */
async function addTslint(): Promise<void> {
  const templateTslintPath = path.resolve(templateRoot, 'tslint.json');
  const projectTslintPath = path.resolve(projectRoot, 'tslint.json');

  // save a backup
  try {
    await fileRename(projectTslintPath, `${projectTslintPath}.OLD`);
  } catch {}

  await fileCopy(templateTslintPath, projectTslintPath);
}

/**
 * Add StyleLint configuration to the project.
 *
 * - make a backup of **.stylelintrc.json**, if one exists
 * - copy **.stylelintrc.json** from package templates
 * - update scripts in **package.json**
 */
async function addStylelint(): Promise<void> {
  const templateStylelintPath = path.resolve(templateRoot, '.stylelintrc.json');
  const projectStylelintPath = path.resolve(projectRoot, '.stylelintrc.json');

  // save a backup
  try {
    await fileRename(projectStylelintPath, `${projectStylelintPath}.OLD`);
  } catch {}

  await fileCopy(templateStylelintPath, projectStylelintPath);

  // update package.json scripts
  const projectPackageJsonPath = path.resolve(projectRoot, 'package.json');
  const projectPackageJson = JSON.parse(await fileRead(projectPackageJsonPath));

  Object.assign(projectPackageJson.scripts, {
    "lint": "npm run lint:ts && npm run lint:style",
    "lint:ts": "ng lint",
    "lint:style": "stylelint \"@(src|projects)/**/*.?(s)css\"",
  });

  await fileWrite(projectPackageJsonPath, formatPackageJson(projectPackageJson));
}

function formatPackageJson(packageJson: any): string {
  return JSON.stringify(packageJson, undefined, 2);
}
