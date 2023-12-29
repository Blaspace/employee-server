const User = require("../schemas/userSchema");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  const foundUser = await User.findOne({ email });
  if (!foundUser) return res.sendStatus(401);

  let salt;
  if (foundUser.salt) {
    salt = foundUser.salt;
  } else {
    salt = "no salt";
  }

  const enteredpassword = crypto
    .pbkdf2Sync(password, salt, 10000, 32, "sha256")
    .toString("hex");
  //const match = await bcript.compare(password, foundUser.password);
  if (enteredpassword != foundUser.password) return res.sendStatus(401);
  const accesstoken = jwt.sign(
    { email: foundUser.email },
    process.env.ACCESS_TOKEN,
    { expiresIn: "5m" }
  );

  const refreshtoken = jwt.sign(
    { email: foundUser.email },
    process.env.REFRESH_TOKEN,
    { expiresIn: "3d" }
  );

  User.findOneAndUpdate({ email: foundUser.email }, { refreshtoken })
    .then((data) => {
      res.cookie("jwt", refreshtoken, {
        httpOnly: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 15,
        path: "/",
      });
      res.json({ accesstoken });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(401);
    });
};

module.exports = handleLogin;
