const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    require: true,
  },
  jobDescription: {
    type: String,
    require: true,
  },
  dateOfAssignment: {
    type: String,
    require: true,
  },
  dateOfSubmition: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    require: true,
  },
  adminId: {
    type: String,
    require: true,
  },
  resulved: {
    type: Boolean,
    require: true,
  },
});

const Assignment = mongoose.model("Assignment", jobSchema);

module.exports = Assignment;
