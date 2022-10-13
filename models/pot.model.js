const mongoose = require('mongoose');

const potSchema = new mongoose.Schema({
  id: {type: String, required: true},
  potName: { type: String, required: true },
  potValue: { type: String, required: true },
});

module.exports = mongoose.model('Pot', potSchema);
