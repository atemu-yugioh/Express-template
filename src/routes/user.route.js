const express = require("express");
const userController = require("../user/user.controller");

const router = express.Router();

router.post("/register", userController.createUser);

router.get("/", userController.getUsers);

module.exports = router;
