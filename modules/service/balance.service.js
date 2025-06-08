const Balance = require("../../models/Balance");
const Settlement = require("../../models/Settlement");
exports.getGroupBalances = async (groupId) => {
  const balance = await Balance.findOne({ groupId });
  return balance?.balances || [];
};
exports.recordSettlement = async (groupId, { payerId, payeeId, amount, date }) => {
  await Settlement.create({ groupId, payerId, payeeId, amount, date });
  return { message: "Settlement recorded" };
};
exports.getUserSettlements = async (userId) => {
  return await Settlement.find({
    $or: [{ payerId: userId }, { payeeId: userId }]
  });
};