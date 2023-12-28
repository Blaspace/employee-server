const Notify = require("../schemas/notificationSchema");

const handleNotify = (req, res) => {
  const { message, senderId, userId } = req.body;
  const newNotification = new Notify({
    message,
    senderId,
    userId,
  });
  newNotification
    .save()
    .then((data) => res.send(data))
    .catch(() => res.sendStatus(400));
};

module.exports = handleNotify;
