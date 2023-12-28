const mongoose = require("mongoose");

const ComplainSchema = mongoose.Schema({
  assignmentId: {
    type: String,
    rquire: true,
  },
  userId: {
    type: String,
    require: true,
  },
  complain: {
    type: String,
    require: true,
  },
});

const Complain = mongoose.model("Complain", ComplainSchema);

module.exports = Complain;
