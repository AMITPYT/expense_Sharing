const router = require("express").Router();
const {groupController} = require("../controller/index");
const auth = require("../../middleware/auth.middleware");

router.post("/", auth, groupController.createGroup);
router.post("/:groupId/invite", auth, groupController.inviteMember);
router.post("/:groupId/join", auth, groupController.joinGroup);
router.get("/user/:userId", auth, groupController.getUserGroups);

module.exports = router;