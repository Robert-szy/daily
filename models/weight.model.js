const mongoose = require('mongoose');

const weightSchema = new mongoose.Schema({
  id: {type: String, required: true},
  weightName: { type: String, required: true },
  weightValue: { type: String, required: true },
  weightUnit: { type: String, required: true},
  weightLayers: { type: Array, required: true},
});

module.exports = mongoose.model('Weight', weightSchema);
