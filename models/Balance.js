const mongoose = require('mongoose');

const balanceSchema = new mongoose.Schema({
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
  balances: [{
    user1: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    user2: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: { type: Number }
  }]
});

module.exports = mongoose.model('Balance', balanceSchema);
