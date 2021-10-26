const mongoose = require('mongoose');

const potsSchema = new mongoose.Schema({
  smallPot: { type: String, required: true },
  mediumPot: { type: String, required: true },
  bigPot: { type: String, required: true },
  doubleSmallPot: { type: String, required: true },
  // doubleMediumPot: { type: String, required: true },
  // doubleBigigPot: { type: String, required: true },

});

module.exports = mongoose.model('Pots', potsSchema);
