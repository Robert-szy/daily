const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  Data: { type: Date, required: true },
  B1: { type: String, required: true },
  B2: { type: String, required: true },
  Kostka: { type: String, required: true },
  Weronki: { type: String, required: true },
  Babeczki: { type: String, required: true },
  Kolor: { type: String, required: true },
  Pianka: { type: String, required: true },
  BC: { type: String, required: true },
  BJ: { type: String, required: true },
  BCM: { type: String, required: true },
  BJM: { type: String, required: true },
  Porcja1: { type: Array, required: true },
  Porcja2: { type: Array, required: true },
  Porcja3: { type: Array, required: true },
  Porcja4: { type: Array, required: true },
  Porcja5: { type: Array, required: true },
  Porcja6: { type: Array, required: true },
  Porcja7: { type: Array, required: true },
  Porcja8: { type: Array, required: true },
});

module.exports = mongoose.model('Orders', ordersSchema);
