const Driver = require('../../domain/driver.model');

module.exports = {
  Query: {
    getAllDrivers: async () => await Driver.find(),
    getDriverById: async (_, { id }) => await Driver.findById(id),
  },
  Mutation: {
    createDriver: async (_, { input }) => {
      const newDriver = new Driver(input);
      return await newDriver.save();
    },
    updateDriver: async (_, { id, input }) => {
      return await Driver.findByIdAndUpdate(id, input, { new: true });
    },
    deleteDriver: async (_, { id }) => {
      const deleted = await Driver.findByIdAndDelete(id);
      if (!deleted) throw new Error('Driver not found');
      return 'Driver deleted successfully';
    },

      
  }
};
