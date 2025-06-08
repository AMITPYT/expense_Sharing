const Expense = require("../../models/Expense");
exports.createExpense = async (groupId, payerId, { title, amount, date, participants }) => {
  const share = amount / participants.length;
  const sharePerUser = {};
  participants.forEach(p => sharePerUser[p] = share);
  return await Expense.create({ groupId, title, amount, date, payerId, participants, sharePerUser });
};
exports.getExpenses = async (groupId) => {
  return await Expense.find({ groupId });
};
