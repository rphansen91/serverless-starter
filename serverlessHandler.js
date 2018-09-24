const router = require("./src/router");
const serverlessProxy = require("route-to/serverlessProxy");

module.exports.main = serverlessProxy(router);
