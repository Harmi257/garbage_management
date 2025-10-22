// location.usecase.js
const locationRepository = require('../infrastructure/repositories/location.repository');

// Use case: Report Location Details
exports.reportLocationDetails = async (data) => {
  try {
    const location = await locationRepository.createLocation(data);
    return location;
  } catch (error) {
    throw new Error('Error reporting location details');
  }
};

// Use case: Update Location Details
exports.updateLocationDetails = async (locationId, data) => {
  try {
    const location = await locationRepository.getLocationById(locationId);
    if (!location) throw new Error('Location not found');
    
    const updatedLocation = await locationRepository.updateLocation(locationId, data);
    return updatedLocation;
  } catch (error) {
    throw new Error('Error updating location');
  }
};
