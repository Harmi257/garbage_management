const mongoose = require('mongoose');

const binSchema = new mongoose.Schema({
  locality: {
    type: String,
    required: true
  },
  landmark: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  loadType: {
    type: String,
    enum: ['Light', 'Medium', 'Heavy'],
    default: 'Light'
  },
  driverEmail: {
    type: String,
    required: true
  },
  cyclePeriod: {
    type: String,
    enum: ['Daily', 'Weekly', 'Bi-Weekly', 'Monthly'],
    required: true
  },
  status: {
    type: String,
    enum: ['Empty', 'Half', 'Full'],
    default: 'Empty'
  }
});

module.exports = mongoose.model('Bin', binSchema);
