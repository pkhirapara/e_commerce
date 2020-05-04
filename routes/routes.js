//router helps in creating api
const express = require("express");
const router = express.Router();
const registerfile = require("../controllers/register");
const authfile = require("../controllers/auth");
const productFile = require("../controllers/product.controller");

router.post("/addProduct", productFile.products);
router.post("/auth", authfile.login);
router.post("/register", registerfile.register);
module.exports = router;
