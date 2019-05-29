#!/usr/bin/env node

import * as yargs from 'yargs';

import { AddAngularCommandConfig, AddNodeCommandConfig, runAddAngularCommand, runAddNodeCommand } from './commands/add.command';

// tslint:disable no-shadowed-variable

yargs
  .command('add <node|angular>', 'add standards to project', yargs => yargs
    .command('node [configs]', 'add standards to Node project', yargs => yargs
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
      }),
      argv => onAddNodeCommand(argv),
    )
    .command('angular [configs]', 'add standards to Angular project', yargs => yargs
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
      argv => onAddAngularCommand(argv),
    ),
  )
  .demandCommand()
  .strict()
  .scriptName('zbream-standards')
  .help()
  .example('$0 add angular', 'modify Angular project, adding all')
  .example('$0 add node --ts', 'modify Node project, adding only tsconfig')
  .parse();

function onAddNodeCommand(args: yargs.Arguments<any>) {
  const parsedArgs: AddNodeCommandConfig = parseAddCommandConfig(args);
  runAddNodeCommand(parsedArgs);
}

function onAddAngularCommand(args: yargs.Arguments<any>) {
  const parsedArgs: AddAngularCommandConfig = parseAddCommandConfig(args);
  runAddAngularCommand(parsedArgs);
}

function parseAddCommandConfig(args: yargs.Arguments<any>): AddAngularCommandConfig {
  const argTypescript: boolean = args.typescript || false;
  const argTslint: boolean = args.tslint || false;
  const argStylelint: boolean = args.stylelint || false;

  // if no options specified, default to all
  let all = false;
  if (!argTypescript && !argTslint && !argStylelint) {
    all = true;
  }

  return {
    addTypescript: all || argTypescript,
    addTslint: all || argTslint,
    addStylelint: all || argStylelint,
  };
}
