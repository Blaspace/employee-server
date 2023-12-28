const User = require("../schemas/userSchema");

const handleLogOut = (req, res) => {
  const refreshtoken = req.cookies.jwt;
  if (!refreshtoken) return res.sendStatus(200);

  User.findOneAndUpdate({ refreshtoken }, { refreshtoken: "" })
    .then(() => {
      res.clearCookie("jwt", refreshtoken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
        secure: true,
        path: "/",
      });
      res.sendStatus(208);
    })
    .catch(() => res.sendStatus(400));
};

module.exports = handleLogOut;
