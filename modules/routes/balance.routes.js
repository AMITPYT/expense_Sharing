const router = require("express").Router();
const {balanceController} = require("../controller/index");
const auth = require("../../middleware/auth.middleware");

router.get("/:groupId/balances", auth, balanceController.getGroupBalances);
router.post("/:groupId/settlements", auth, balanceController.recordSettlement);
router.get("/user/:userId/settlements", auth, balanceController.getUserSettlements);

module.exports = router;
