const { Schema, model } = require("mongoose");

const notificationSchema = new Schema({
  message: String,
  senderId: String,
  userId: String,
  time: String,
});

const Notify = model("notify", notificationSchema);

module.exports = Notify;
