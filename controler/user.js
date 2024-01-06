const User = require("../schemas/userSchema");

const handleGetUser = async (req, res) => {
  const refreshtoken = req.cookies.jwt;
  const user = await User.findOne({ refreshtoken: refreshtoken });
  if (!user) res.sendStatus(400);
  console.log(user);
  res.send(user);
};
module.exports = handleGetUser;
