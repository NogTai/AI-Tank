const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");

const configuration = require("./config/configuration");

const db = require("./common/database");

const Bot = require("./models/bot");
const User = require("./models/user");
const Match = require("./models/match");
const Active = require("./models/active");
const Article = require("./models/article");

const importData = async () => {
  try {
    await db.getConnection();

    const accountAdmin = {
      username: "admin",
      password: "adminhitclub@$#",
    };

    let user = new User({
      userName: accountAdmin.username,
      password: bcrypt.hashSync(accountAdmin.password, 10),
      dateOfBirth: "2010-08-18T00:00:00.000+0000",
      studentID: "2010601808",
      email: "hitclub@gmail.com",
      firstName: "HIT",
      lastName: "HIT Club",
      phoneNumber: "2010601808",
      status: true,
      hash: "mm",
      role: "admin",
    });
    user.hash = bcrypt.hashSync(
      user.userName + user.role + configuration.SECRET,
      10
    );
    await user.save();
    console.log("import data account admin success");
    console.log(accountAdmin);
    process.exit(0);
  } catch (error) {
    console.log(error.message);
    console.log("account admin has ready exists");
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await db.getConnection();

    await Active.deleteMany();
    await Article.deleteMany();
    await Bot.deleteMany();
    await Match.deleteMany();
    await User.deleteMany();

    console.log("Deleted data success");
    process.exit(0);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

const exportData = async () => {
  try {
    await db.getConnection();

    const actives = await Active.find();
    const articles = await Article.find();
    const bots = await Bot.find();
    const matchs = await Match.find();
    const users = await User.find();

    fs.writeFileSync(
      path.join(__dirname, "./migration/Active.json"),
      JSON.stringify(actives),
      { encoding: "utf-8" }
    );

    fs.writeFileSync(
      path.join(__dirname, "./migration/Article.json"),
      JSON.stringify(articles),
      { encoding: "utf-8" }
    );

    fs.writeFileSync(
      path.join(__dirname, "./migration/Active.json"),
      JSON.stringify(actives),
      { encoding: "utf-8" }
    );

    fs.writeFileSync(
      path.join(__dirname, "./migration/Bot.json"),
      JSON.stringify(bots),
      { encoding: "utf-8" }
    );

    fs.writeFileSync(
      path.join(__dirname, "./migration/Match.json"),
      JSON.stringify(matchs),
      { encoding: "utf-8" }
    );

    fs.writeFileSync(
      path.join(__dirname, "./migration/User.json"),
      JSON.stringify(users),
      { encoding: "utf-8" }
    );

    console.log("exported data path: aitank_webserver/migration");
    process.exit(0);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-e") {
  exportData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
