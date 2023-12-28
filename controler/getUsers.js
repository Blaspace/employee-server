const User = require("../schemas/userSchema");

const handleGetUsers = (req, res) => {
  User.find()
    .then((data) => res.send(data))
    .catch(() => res.sendStatus(400));
};

module.exports = handleGetUsers;
