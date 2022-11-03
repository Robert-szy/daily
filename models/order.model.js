const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  data: { type: Date, default: Date.now(), required: true },
  b1: { type: Array, required: true },
  b2: { type: Array, required: true },
  danusia: { type: Array, required: true },
  slomka: { type: Array, required: true },
  kostka: { type: Array, required: true },
  weronki: { type: Array, required: true },
  mini: { type: Array, required: true },
  babeczki: { type: Array, required: true },
  kolor: { type: Array, required: true },
  pianka: { type: Array, required: true },
  bc: { type: Number, required: true },
  bj: { type: Number, required: true },
  bcm: { type: Number, required: true },
  bjm: { type: Number, required: true },
  bcbc: { type: Number, required: true },
  yola: { type: Number, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
