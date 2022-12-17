import ejs from "ejs";
import fs from "fs";
import path from "path";
import prettier from "prettier";
import { fileURLToPath } from "url";
export default (config) => {
  const __dirname = fileURLToPath(import.meta.url);
  const template = fs.readFileSync(
    path.resolve(__dirname, "../template/package.ejs"),
    {
      encoding: "utf-8",
    }
  );
  const code = ejs.render(template, {
    packageName: config.packageName,
    description: config.description,
    middleware: config.middleware,
  });
  return prettier.format(code, { parser: "json" });
};
