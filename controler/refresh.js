const User = require("../schemas/userSchema");
const jwt = require("jsonwebtoken");

const handleRefresh = (req, res) => {
  const refreshtoken = req.cookies.jwt;
  if (!refreshtoken) return res.sendStatus(401);

  const foundUser = User.findOne({ refreshtoken });
  if (!foundUser) return res.sendStatus(401);

  const verify = jwt.verify(
    refreshtoken,
    process.env.REFRESH_TOKEN,
    (err, decoded) => {
      if (err) {
        User.findOneAndUpdate({ email: foundUser.email }, { refreshtoken: "" });
        res.sendStatus(401);
      }

      const accesstoken = jwt.sign(
        { email: decoded.email },
        process.env.ACCESS_TOKEN,
        { expiresIn: "5m" }
      );

      res.json({ accesstoken });
    }
  );
};

module.exports = handleRefresh;
