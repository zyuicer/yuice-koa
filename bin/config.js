export default (answer) => {
  console.log(answer);
  return {
    port: answer.port,
    packageName: answer.packageName,
    description: answer.description,
    middleware: {
      static: haveMiddleware(answer, "koa-static"),
      multer: haveMiddleware(answer, "@koa-multer"),
      bodyparser: haveMiddleware(answer, "koa-bodyparser"),
      router: haveMiddleware(answer, "koa-router"),
    },
  };
};
function haveMiddleware(answer, name) {
  return answer.middleware.indexOf(name) !== -1;
}
