const mongoose = require('mongoose');

const multiplierSchema = new mongoose.Schema({
  id: {type: String, required: true},
  multiplierName: { type: String, required: true },
  multiplierValue: { type: String, required: true },
});

module.exports = mongoose.model('Multiplier', multiplierSchema);
