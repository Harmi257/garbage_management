const Location = require('../../domain/location.model');

exports.createLocation = async (data) => {
  const location = new Location(data);
  return location.save();
};

exports.getAllLocations = async () => {
  return Location.find();
};

exports.getLocationById = async (id) => {
  return Location.findById(id);
};

exports.updateLocation = async (id, data) => {
  return Location.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteLocation = async (id) => {
  return Location.findByIdAndDelete(id);
};
