const Assignment = require("../schemas/jobSchema.js");

const handleResulved = (req, res) => {
  const { id } = req.body;

  Assignment.findByIdAndUpdate(id, { resulved: true })
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400));
};

module.exports = handleResulved;
