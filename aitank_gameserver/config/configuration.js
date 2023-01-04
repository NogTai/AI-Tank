const config = require("config");

module.exports = {
  SOCKET_HOST: process.env.SOCKET_HOST || config.get("gameServer.host"),
  SOCKET_PORT: process.env.SOCKET_PORT || config.get("gameServer.port"),
};
