const path = require("path");

const koa = require("koa");
const statics = require("koa-static");
const bodyParser = require("koa-bodyparser");

const app = new koa();

app.use(statics(path.join(__dirname, "../dist"))).use(bodyParser());

app.listen(3000);
