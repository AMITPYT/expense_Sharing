const groupService = require("../service/group.service");
exports.createGroup = async (req, res) => {
  try {
    const group = await groupService.createGroup(req.user.id, req.body);
    res.status(201).json(group);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.inviteMember = async (req, res) => {
  try {
    const result = await groupService.inviteMember(req.params.groupId, req.body.email);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.joinGroup = async (req, res) => {
  try {
    const result = await groupService.joinGroup(req.params.groupId, req.user.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getUserGroups = async (req, res) => {
  try {
    const groups = await groupService.getUserGroups(req.params.userId);
    res.status(200).json(groups);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};