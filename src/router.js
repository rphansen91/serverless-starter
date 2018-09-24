const { middleware, route, combineRoutes, jsonParser } = require("route-to");

const isActive = (req, res) => {
  res.json({ active: true });
};

const echoBody = (req, res) => {
  res.json(req.body);
};

module.exports = middleware(
  combineRoutes(
    route.get("/active", isActive),
    route.post("/", jsonParser, echoBody)
  )
);
