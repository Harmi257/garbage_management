const Location = require('../../domain/location.model');

module.exports = {
  Query: {
    getAllLocations: async () => {
      return await Location.find();
    },
    getLocationById: async (_, { id }) => {
      return await Location.findById(id);
    },
  },
  Mutation: {
    createLocation: async (_, { input }) => {
      const newLocation = new Location(input);
      return await newLocation.save();
    },
    updateLocation: async (_, { id, input }) => {
      return await Location.findByIdAndUpdate(id, input, { new: true });
    },
    deleteLocation: async (_, { id }) => {
      const deleted = await Location.findByIdAndDelete(id);
      if (!deleted) throw new Error('Location not found');
      return 'Location deleted successfully';
    },
  },
};
