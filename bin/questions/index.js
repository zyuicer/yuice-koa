import inquirer from "inquirer";
export default async () => {
  const r = await inquirer.prompt([
    {
      type: "input",
      name: "packageName",
      message: "Package name:",
    },
    {
      type: "input",
      name: "port",
      default() {
        return "8080"
      },
      message: "set port number",
    },
    {
      type: "input",
      name: "description",
      message: "Description:",
    },
    {
      type: "checkbox",
      name: "middleware",
      choices: [
        {
          name: "@koa/multer",
        },
        {
          name: "koa-router",
        },
        {
          name: "koa-static",
        },
        {
          name: "koa-bodyparser",
        },
      ],
    },
  ]);
  return r;
};
