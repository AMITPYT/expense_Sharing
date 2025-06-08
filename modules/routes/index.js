const express = require("express");
const router = express.Router();

const authApi = require('./auth.routes');
const groupApi = require('./group.routes');
const expenseApi = require('./expense.routes');
const balanceApi = require('./balance.routes');

router.use("/auth", authApi);
router.use("/groups", groupApi);
router.use("/groups", expenseApi);
router.use("/groups", balanceApi);
router.use("/users", balanceApi);

module.exports = router;
