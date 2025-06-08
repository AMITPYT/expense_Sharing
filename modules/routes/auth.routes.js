const router = require("express").Router();
const {authController} = require("../controller/index");

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;