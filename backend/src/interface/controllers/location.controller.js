const LocationUseCase = require('../../usecase/location.usecase');

// Create location
exports.createLocation = async (req, res) => {
  try {
    const newLocation = await LocationUseCase.createLocation(req.body);
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create location', error: error.message });
  }
};

// Get all locations
exports.getAllLocations = async (req, res) => {
  try {
    const locations = await LocationUseCase.getAllLocations();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch locations', error: error.message });
  }
};

// Get location by ID
exports.getLocationById = async (req, res) => {
  try {
    const location = await LocationUseCase.getLocationById(req.params.id);
    if (!location) return res.status(404).json({ message: 'Location not found' });
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch location', error: error.message });
  }
};

// Update location by ID
exports.updateLocation = async (req, res) => {
  try {
    const updatedLocation = await LocationUseCase.updateLocation(req.params.id, req.body);
    if (!updatedLocation) return res.status(404).json({ message: 'Location not found' });
    res.status(200).json(updatedLocation);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update location', error: error.message });
  }
};

// Delete location by ID
exports.deleteLocation = async (req, res) => {
  try {
    const deleted = await LocationUseCase.deleteLocation(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Location not found' });
    res.status(200).json({ message: 'Location deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete location', error: error.message });
  }
};
