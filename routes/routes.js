//router helps in creating api
const express = require("express");
const router = express.Router();
const registerfile = require("../controllers/register");
const authfile = require("../controllers/auth");

router.post("/login", authfile.login);
router.post("/register", registerfile.register);
module.exports = router;
