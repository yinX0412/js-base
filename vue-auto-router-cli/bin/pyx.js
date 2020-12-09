#!/usr/bin/env node
const program = require('commander');

program.version(require('../package.json').version);

// pyx init abc

program
  .command('init <name>')
  .description('init project')
  .action((name) => {
    console.log('init ' + name);
  });

program.parse(process.argv);
