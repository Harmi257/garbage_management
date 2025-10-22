const DriverRepository = require('../infrastructure/repositories/driver.repository');

exports.createDriver = async (data) => {
  return DriverRepository.createDriver(data);
};

exports.getAllDrivers = async () => {
  return DriverRepository.getAllDrivers();
};

exports.getDriverById = async (id) => {
  return DriverRepository.getDriverById(id);
};

exports.updateDriver = async (id, data) => {
  return DriverRepository.updateDriver(id, data);
};

exports.deleteDriver = async (id) => {
  return DriverRepository.deleteDriver(id);
};
