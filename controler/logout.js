const User = require("../schemas/userSchema");

const handleLogOut = (req, res) => {
  const refreshtoken = req.cookies.jwt;
  if (!refreshtoken) return res.sendStatus(200);

  User.findOneAndUpdate({ refreshtoken }, { refreshtoken: "" })
    .then(() => {
      res.clearCookie("jwt", refreshtoken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 15,
        path: "/",
      });

      res.sendStatus(208);
    })
    .catch(() => res.sendStatus(400));
};

module.exports = handleLogOut;
