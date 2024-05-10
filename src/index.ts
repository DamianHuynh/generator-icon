#!/usr/bin/env node

import chalk from "chalk";
import { Command } from "commander";
import figlet from "figlet";

import runAndroid from "./android/index.js";
import { log, success } from "./utils/logger.js";

const program = new Command();

console.log(chalk.cyan(figlet.textSync("Generator Icon")));

const run = (option: Option) => {
  if (option.ios) {
    log("ios command");
  } else if (option.android) {
    runAndroid(option);
  } else {
    log("run all command");
  }
};

program
  .version("1.0.0")
  .option("-a, --android", "generate icon android only")
  .option("-i, --ios", "generate icon ios only")
  .option("-s, --source <string>", "source image for icon")
  .action(run)
  .parse(process.argv);

// const options = program.opts();

// if (!options.inputIcon) {
//   console.error("Error: Input icon file is required");
//   program.help();
// }
