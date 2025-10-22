const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: String,
  password: String, // You can hash this later
  email: String
});

module.exports = mongoose.model('Admin', adminSchema);
