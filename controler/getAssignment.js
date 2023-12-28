const Assignment = require("../schemas/jobSchema");

const handleGetAssignment = (req, res) => {
  Assignment.find()
    .then((data) => res.json(data))
    .catch((err) => res.sendStatus(400));
};

module.exports = handleGetAssignment;
