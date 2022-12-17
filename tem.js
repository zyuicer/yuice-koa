import Koa from "koa";
import bodyParser from "koa-bodyparser";
const app = new Koa();

app.use(bodyParser());

app.listen(8080, () => {
  console.log("service run http://localhost:8080");
});
