import chalk from "chalk";

const warn = (messages: string) => {
  console.warn(`${chalk.yellow.bold("Warn")} ${chalk.yellow.bold(messages)}`);
};

const error = (messages: string) => {
  console.error(`❌ ${chalk.red.bold(messages)}`);
};

const success = (...messages: Array<string>) => {
  console.log(`✨ ${chalk.green(messages)}`);
};
const log = (...messages: Array<string>) => {
  console.log(`${messages}`);
};

export { success, warn, error, log };
