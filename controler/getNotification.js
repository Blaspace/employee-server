const Notify = require("../schemas/notificationSchema");

const handleGetNotification = (req, res) => {
  Notify.find()
    .then((data) => res.send(data))
    .catch(() => res.sendStatus(400));
};
module.exports = handleGetNotification;
