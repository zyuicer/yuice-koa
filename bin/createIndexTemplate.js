import ejs from "ejs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import prettier from "prettier";
export default (config) => {
  const __dirname = fileURLToPath(import.meta.url);
  const template = fs.readFileSync(
    path.resolve(__dirname, "../template/index.ejs"),
    {
      encoding: "utf-8",
    }
  );
  const code = ejs.render(template, {
    port: config.port,
    middleware: config.middleware,
  });
  return prettier.format(code, {
    parser: "babel",
  });
};
