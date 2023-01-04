const rimraf = require("rimraf");
const fse = require("fs-extra");

const makeClearFolders = () => {
  console.log("Deleting file ...");

  rimraf.sync("./aitank_webserver/upload/bot/*", {
    glob: { ignore: ".gitkeep" },
  });

  rimraf.sync("./aitank_webserver/public/Replays/*", {
    glob: { ignore: ".gitkeep" },
  });

  rimraf.sync("./aitank_gameserver/Bots/*", {
    glob: { ignore: ".gitkeep" },
  });

  rimraf.sync("./aitank_gameserver/Pack/Server/Replay/*", {
    glob: { ignore: ".gitkeep" },
  });

  rimraf.sync("./aitank_gameserver/Pack/Server/Result/*", {
    glob: { ignore: ".gitkeep" },
  });

  console.log("Deleted temp files");
};

const backUpData = () => {
  console.log("backing up ...");

  if (!fse.existsSync("./data")) {
    fse.mkdirSync("./data/database", { recursive: true });
    fse.mkdirSync("./data/aitank_webserver/upload/bot", { recursive: true });
    fse.mkdirSync("./data/aitank_webserver/public/Replays", {
      recursive: true,
    });
    fse.mkdirSync("./data/aitank_gameserver/Bots", { recursive: true });
    fse.mkdirSync("./data/aitank_gameserver/Pack/Server/Replay", {
      recursive: true,
    });
    fse.mkdirSync("./data/aitank_gameserver/Pack/Server/Result", {
      recursive: true,
    });
  }

  fse.copySync("./aitank_webserver/migration/", "./data/database/", {
    overwrite: true,
  });
  fse.copySync(
    "./aitank_webserver/upload/bot/",
    "./data/aitank_webserver/upload/bot/",
    {
      overwrite: true,
    }
  );
  fse.copySync(
    "./aitank_webserver/public/Replays/",
    "./data/aitank_webserver/public/Replays/",
    {
      overwrite: true,
    }
  );
  fse.copySync("./aitank_gameserver/Bots/", "./data/aitank_gameserver/Bots/", {
    overwrite: true,
  });
  fse.copySync(
    "./aitank_gameserver/Pack/Server/Replay/",
    "./data/aitank_gameserver/Pack/Server/Replay/",
    {
      overwrite: true,
    }
  );
  fse.copySync(
    "./aitank_gameserver/Pack/Server/Result/",
    "./data/aitank_gameserver/Pack/Server/Result/",
    {
      overwrite: true,
    }
  );

  console.log("back up success into folder data");
};

if (process.argv[2] === "-clear") {
  makeClearFolders();
} else if (process.argv[2] === "-backup") {
  backUpData();
}
