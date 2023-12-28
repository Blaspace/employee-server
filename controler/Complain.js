const Complain = require("../schemas/ComplainSchema");

const handleComplain = (req, res) => {
  const { assignmentId, complain, userId } = req.body;

  const newComplain = new Complain({
    assignmentId,
    complain,
    userId,
  });

  newComplain
    .save()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

module.exports = handleComplain;
