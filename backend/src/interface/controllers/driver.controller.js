const DriverUseCase = require('../../usecase/driver.usecase');

// Create driver
exports.createDriver = async (req, res) => {
  try {
    const newDriver = await DriverUseCase.createDriver(req.body);
    res.status(201).json(newDriver);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create driver', error: error.message });
  }
};

// Get all drivers
exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await DriverUseCase.getAllDrivers();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch drivers', error: error.message });
  }
};

// Get driver by ID
exports.getDriverById = async (req, res) => {
  try {
    const driver = await DriverUseCase.getDriverById(req.params.id);
    if (!driver) return res.status(404).json({ message: 'Driver not found' });
    res.status(200).json(driver);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch driver', error: error.message });
  }
};

// Update driver by ID
exports.updateDriver = async (req, res) => {
  try {
    const updatedDriver = await DriverUseCase.updateDriver(req.params.id, req.body);
    if (!updatedDriver) return res.status(404).json({ message: 'Driver not found' });
    res.status(200).json(updatedDriver);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update driver', error: error.message });
  }
};

// Delete driver by ID
exports.deleteDriver = async (req, res) => {
  try {
    const deleted = await DriverUseCase.deleteDriver(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Driver not found' });
    res.status(200).json({ message: 'Driver deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete driver', error: error.message });
  }
};
