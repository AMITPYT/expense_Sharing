const router = require("express").Router();
const {expenseController} = require("../controller/index");
const auth = require("../../middleware/auth.middleware");

router.post("/:groupId/expenses", auth, expenseController.createExpense);
router.get("/:groupId/expenses", auth, expenseController.getExpenses);

module.exports = router;