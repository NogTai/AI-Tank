const config = require("config");

module.exports = {
  LIVE_STREAM_PORT:
    process.env.LIVE_STREAM_PORT || config.get("liveStream.port"),
  GAME_SERVER_IP: process.env.GAME_SERVER_IP || config.get("gameServer.ip"),
  SERVER_PORT: process.env.PORT || config.get("server.port"),
  MONGODB_URI: process.env.MONGODB_URI || config.get("mongoo"),
  SECRET: process.env.SECRET || config.get("secret"),
};
