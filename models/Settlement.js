const mongoose = require('mongoose');

const settlementSchema = new mongoose.Schema({
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
  payerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  payeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Settlement', settlementSchema);
