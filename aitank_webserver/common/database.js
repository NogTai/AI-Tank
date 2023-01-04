const mongoose = require("mongoose");
const configuration = require("../config/configuration");

async function getConnection() {
  try {
    const conn = await mongoose.connect(configuration.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error to connect db: ${err.message}`);
    process.exit(1);
  }
}
module.exports = {
  getConnection: getConnection,
};
