const Bin = require('../../domain/bin.model');

module.exports = {
  Query: {
    getAllBins: async () => await Bin.find(),
    getBinById: async (_, { id }) => await Bin.findById(id),
  },
  Mutation: {
    createBin: async (_, { input }) => {
      const newBin = new Bin(input);
      return await newBin.save();
    },
    updateBin: async (_, { id, input }) => {
      return await Bin.findByIdAndUpdate(id, input, { new: true });
    },
    deleteBin: async (_, { id }) => {
        const deleted = await Bin.findByIdAndDelete(id);
        if (!deleted) throw new Error('Bin not found');
        return {
          success: true,
          message: 'Bin deleted successfully',
        };
      }
      
  }
};
