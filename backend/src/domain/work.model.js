const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  binId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bin',
    required: true
  },
  driverEmail: {
    type: String,
    required: true
  },
  workDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending'
  }
});

module.exports = mongoose.model('Work', workSchema);
