const expenseService = require("../service/expense.service");
exports.createExpense = async (req, res) => {
  try {
    const expense = await expenseService.createExpense(req.params.groupId, req.user.id, req.body);
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await expenseService.getExpenses(req.params.groupId);
    res.status(200).json(expenses);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
