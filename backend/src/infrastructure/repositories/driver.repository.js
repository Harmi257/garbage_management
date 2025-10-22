const Driver = require('../../domain/driver.model');

// Create a new driver
exports.createDriver = async (data) => {
  try {
    const driver = new Driver(data);
    return await driver.save();
  } catch (error) {
    throw new Error('Error creating driver: ' + error.message);
  }
};

// Get all drivers
exports.getAllDrivers = async () => {
  try {
    return await Driver.find();
  } catch (error) {
    throw new Error('Error fetching drivers: ' + error.message);
  }
};

// Get a driver by ID
exports.getDriverById = async (id) => {
  try {
    return await Driver.findById(id);
  } catch (error) {
    throw new Error('Error fetching driver by ID: ' + error.message);
  }
};

// Update a driver by ID
exports.updateDriver = async (id, data) => {
  try {
    return await Driver.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error('Error updating driver: ' + error.message);
  }
};

// Delete a driver by ID
exports.deleteDriver = async (id) => {
  try {
    return await Driver.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error deleting driver: ' + error.message);
  }
};
