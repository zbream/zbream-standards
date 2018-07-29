#!/usr/bin/env node

import * as yargs from 'yargs';

import { runAddCommand } from './commands/add.command';

yargs
  .command('add [configs]', 'add standards to project', yargs => yargs
    .option('typescript', {
      description: 'add only TypeScript config (tsconfig.json)',
      group: 'Configs:',
      type: 'boolean',
      alias: 'ts',
    })
    .option('tslint', {
      description: 'add only TSLint config (tslint.json)',
      group: 'Configs:',
      type: 'boolean',
    })
    .option('stylelint', {
      description: 'add only StyleLint config (.stylelintrc.json)',
      group: 'Configs:',
      type: 'boolean',
    }),
    argv => onAddCommand(argv),
  )
  .demandCommand()
  .strict()
  .scriptName('zream-angular-standards')
  .help()
  .example('$0 add', 'modify project, adding all configurations')
  .argv;

function onAddCommand(args: yargs.Arguments) {
  const argTypescript: boolean = args.typescript || false;
  const argTslint: boolean = args.tslint || false;
  const argStylelint: boolean = args.stylelint || false;

  // if no options specified, default to all
  let all = false;
  if (!argTypescript && !argTslint && !argStylelint) {
    all = true;
  }

  runAddCommand({
    addTypescript: all || argTypescript,
    addTslint: all || argTslint,
    addStylelint: all || argStylelint,
  });
}
