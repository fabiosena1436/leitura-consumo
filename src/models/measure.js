const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema({
  customerCode: {
    type: String,
    required: true,
  },
  measureDateTime: {
    type: Date,
    required: true,
  },
  measureType: {
    type: String,
    enum: ['WATER', 'GAS'],
    required: true,
  },
  measureValue: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  uuid: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('Measure', measureSchema);