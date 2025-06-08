const balanceService = require("../service/balance.service");
exports.getGroupBalances = async (req, res) => {
  try {
    const balances = await balanceService.getGroupBalances(req.params.groupId);
    res.status(200).json(balances);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.recordSettlement = async (req, res) => {
  try {
    const settlement = await balanceService.recordSettlement(req.params.groupId, req.body);
    res.status(201).json(settlement);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getUserSettlements = async (req, res) => {
  try {
    const settlements = await balanceService.getUserSettlements(req.params.userId);
    res.status(200).json(settlements);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};