const User = require('../../domain/user.model');

exports.createUser = async (data) => {
  const user = new User(data);
  return user.save();
};

exports.getAllUsers = async () => {
  return User.find();
};

exports.getUserById = async (id) => {
  return User.findById(id);
};

exports.updateUser = async (id, data) => {
  return User.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteUser = async (id) => {
  return User.findByIdAndDelete(id);
};
