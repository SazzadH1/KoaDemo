const http = require("http");

const Koa = require("koa");
const app = new Koa();

const Router = require("@koa/router");
const router = new Router();

const oneLinerJoke = require("one-liner-joke");

const port = 3000;

router.get("/", (ctx) => {
  ctx.body = {Text: "Hello world!"};
});

router.get("/mars", (ctx) => {
  ctx.body = {Text: "Hello Mars!"};
});

router.get("/joke", (ctx) => {
  const getRandomJoke = oneLinerJoke.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'marriage']
  });

  ctx.body = {Text: `${getRandomJoke.body}\npowered by one-liner-joke`};
});

app.use(router.routes());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});