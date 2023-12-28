const Complain = require("../schemas/ComplainSchema");

const handleGetComplains = (req, res) => {
  Complain.find()
    .then((data) => res.send(data))
    .catch((err) => res.sendStatus(400));
};

module.exports = handleGetComplains;
