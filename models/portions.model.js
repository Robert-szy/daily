const mongoose = require('mongoose');

const portionsSchema = new mongoose.Schema({
  Porcja1: { type: Array, required: true },
  Porcja2: { type: Array, required: true },
  Porcja3: { type: Array, required: true },
  Porcja4: { type: Array, required: true },
  Porcja5: { type: Array, required: true },
  Porcja6: { type: Array, required: true },
  Porcja7: { type: Array, required: true },
  Porcja8: { type: Array, required: true },
});

module.exports = mongoose.model('Portions', portionsSchema);
