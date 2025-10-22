const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobileNo: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  binId: {
    type: mongoose.Schema.Types.ObjectId,  // or String, depending on your use case
    ref: 'Bin',  // Reference to the Bin model if binId is supposed to be an ObjectId
    required: true
  },
  idNum: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Driver', driverSchema);
