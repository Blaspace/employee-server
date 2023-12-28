const User = require("../schemas/userSchema");
const crypto = require("crypto");

const handleSignUp = async (req, res) => {
  const { fullName, email, password } = req.body;

  const conflict = await User.findOne({ email });
  if (conflict) return res.status(409).send("user already exist");

  const salt = crypto.randomBytes(16).toString("hex");

  const hashedpassword = crypto
    .pbkdf2Sync(password, salt, 10000, 32, "sha256")
    .toString("hex");

  const newUser = new User({
    fullName,
    email,
    password: hashedpassword,
    refreshtoken: "",
    userRole: "2000",
    role: "Full stack",
    salt,
  });

  newUser
    .save()
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
};

module.exports = handleSignUp;
