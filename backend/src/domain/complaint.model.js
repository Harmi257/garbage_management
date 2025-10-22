const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  binName: {
    type: String,
    required: true
  },
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
  userEmail: {
    type: String,
    required: true
  },
  complaint: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Resolved'],
    default: 'Pending'
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Complaint', complaintSchema);
