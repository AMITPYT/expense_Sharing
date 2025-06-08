const Group = require("../../models/Group");
const GroupMember = require("../../models/groupMember");
const User = require("../../models/User");
exports.createGroup = async (ownerId, { name }) => {
  const group = await Group.create({ name, ownerId });
  await GroupMember.create({ groupId: group._id, userId: ownerId });
  return group;
};
exports.inviteMember = async (groupId, email) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");
  await GroupMember.create({ groupId, userId: user._id });
  return { message: "User invited to group" };
};
exports.joinGroup = async (groupId, userId) => {
  const exists = await GroupMember.findOne({ groupId, userId });
  if (exists) throw new Error("Already a member");
  await GroupMember.create({ groupId, userId });
  return { message: "Joined group" };
};
exports.getUserGroups = async (userId) => {
  const memberships = await GroupMember.find({ userId }).populate("groupId");
  return memberships.map(m => m.groupId);
};