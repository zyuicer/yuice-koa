#!/usr/bin/env node
import fs from "fs";
import path from "path";
import createIndexTemplate from "./createIndexTemplate.js";
import { execa } from "execa";
import chalk from "chalk";
import questions from "./questions/index.js";
import { default as createConfig } from "./config.js";

import createPackageTemplate from "./createPackageTemplate.js";
const answer = await questions();
fs.mkdirSync(getRootPath());

const config = createConfig(answer);

console.log(chalk.blue("creating index.js ....."));
fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(config));

console.log(chalk.blue("creating package.json ....."));
fs.writeFileSync(
  `${getRootPath()}/package.json`,
  createPackageTemplate(config)
);

console.log(chalk.blue("install dependencies ....."));
execa("pnpm", ["i"], {
  cwd: getRootPath(),
  stdio: [2, 2, 2],
});

function getRootPath() {
  return path.resolve(process.cwd(), answer.packageName);
}
