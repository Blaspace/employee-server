const Assignment = require("../schemas/jobSchema");

const handleSendAssignment = (req, res) => {
  const {
    jobTitle,
    jobDescription,
    dateOfAssignment,
    dateOfSubmition,
    userId,
    adminId,
  } = req.body;

  const ass = new Assignment({
    jobTitle,
    jobDescription,
    dateOfAssignment,
    dateOfSubmition,
    userId,
    adminId,
    resulved: false,
  });

  ass
    .save()
    .then((data) => res.send(data))
    .catch((err) => {
      res.sendStatus(400);
      console.log(err);
    });
};

module.exports = handleSendAssignment;
