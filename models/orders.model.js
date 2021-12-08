const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  Data: { type: Date, default: Date.now(), required: true },
  B1: { type: Number, required: true },
  B2: { type: Number, required: true },
  Kostka: { type: Number, required: true },
  Weronki: { type: Number, required: true },
  Babeczki: { type: Number, required: true },
  Kolor: { type: Number, required: true },
  Pianka: { type: Number, required: true },
  BC: { type: Number, required: true },
  BJ: { type: Number, required: true },
  BCM: { type: Number, required: true },
  BJM: { type: Number, required: true },
});

module.exports = mongoose.model('Orders', ordersSchema);
