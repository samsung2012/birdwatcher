const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

const middlewares = jsonServer.defaults({
  static: "node_modules/json-server/dist",
});

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(function (req, res, next) {
  setTimeout(next, 0);
});

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

server.post("/birds/", function (req, res, next) {
  const error = validateBird(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    req.body.slug = createSlug(req.body.type);
    next();
  }
});

server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

function createSlug(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function validateBird(bird) {
  if (!bird.type) return "Type is required.";
  if (!bird.locationId) return "Location is required.";
  if (!bird.time) return "Time is required.";
  return "";
}
