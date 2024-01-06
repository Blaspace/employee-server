const User = require("../schemas/userSchema");

const handleGetUser = (req, res) => {
  const refreshtoken = req.cookies.jwt;

  User.findOne({ refreshtoken })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => res.sendStatus(400));
};
module.exports = handleGetUser;
