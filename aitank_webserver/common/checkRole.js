const bcrypt = require("bcryptjs");
const configuration = require("../config/configuration");

module.exports = (role) => {
  return (req, res, next) => {
    if (req.user) {
      bcrypt
        .compare(req.user.userName + role + configuration.SECRET, req.user.hash)
        .then((result) => {
          if (result) {
            // console.log(result);
            return next();
          }

          return res.redirect("/");
        });
    } else {
      return res.redirect("/");
    }
  };
};
