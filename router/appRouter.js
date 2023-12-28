const express = require("express");
const handleSignUp = require("../controler/signUp");
const handleLogin = require("../controler/login");
const handleRefresh = require("../controler/refresh");
const handleGetUser = require("../controler/user");
const handleGetUsers = require("../controler/getUsers");
const handleSendAssignment = require("../controler/Assignment");
const handleGetAssignment = require("../controler/getAssignment");
const handleLogOut = require("../controler/logout");
const handleComplain = require("../controler/Complain");
const handleGetComplains = require("../controler/getComplain");
const handleResulved = require("../controler/handleResulveAssignment");
const handleNotify = require("../controler/Notify");
const handleGetNotification = require("../controler/getNotification");

const router = express.Router();

router.post("/signup", handleSignUp);

router.post("/login", handleLogin);

router.post("/resulve", handleResulved);

router.post("/logout", handleLogOut);

router.post("/complain", handleComplain);

router.post("/notify", handleNotify);

router.post("/notification", handleGetNotification);

router.post("/allcomplain", handleGetComplains);

router.post("/refresh", handleRefresh);

router.post("/assignment", handleSendAssignment);

router.post("/getassignment", handleGetAssignment);

router.post("/getusers", handleGetUsers);

router.post("/getuser", handleGetUser);

module.exports = router;
