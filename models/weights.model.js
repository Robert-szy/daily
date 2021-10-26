const mongoose = require('mongoose');

const weightsSchema = new mongoose.Schema({
  danusia: { type: Array, required: true },
  baton1: { type: Array, required: true },
  baton2: { type: Array, required: true},
  weronki: { type: Array, required: true},
  babeczki: { type: Array, required: true},
  zwijana: { type: Array, required: true},
  owocowa: { type: Array, required: true},
  kosteczka: { type: Array, required: true},
  slomka: { type: Array, required: true},
  mini: { type: Array, required: true},
  pianka: { type: Array, required: true},
});

module.exports = mongoose.model('Weights', weightsSchema);
