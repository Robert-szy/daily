const mongoose = require('mongoose');

const multipliersSchema = new mongoose.Schema({
  id: {type: String, required: true},
  sugarMultiply: { type: String, required: true },
  fatMultiply: { type: String, required: true },
  acidMultiply: { type: String, required: true},
  jellyProteinMultiply: { type: String, required: true},
  foamProteinMultiply: { type: String, required: true},
  syrupMultiply: { type: String, required: true},
  appleMultiply: { type: String, required: true},
  lemonMultiply: { type: String, required: true},
  orangeMultiply: { type: String, required: true},
  raspberryMultiply: { type: String, required: true},
  cherryMultiply: { type: String, required: true},
  vanillaMultiply: { type: String, required: true},
  kiwiMultiply: { type: String, required: true},
  waterMultiply: { type: String, required: true},
  agarSummerMultiply: { type: String, required: true},
  agarWinterMultiply: { type: String, required: true},
});

module.exports = mongoose.model('Multipliers', multipliersSchema);
