const Work = require('../../domain/work.model');

module.exports = {
  Query: {
    getAllWorks: async () => {
      return await Work.find().populate('binId');  // populate 'binId' to get the Bin details as well
    },
    getWorkById: async (_, { id }) => {
      return await Work.findById(id).populate('binId');
    },
    getWorksByDriverEmail: async (_, { email }) => {
      return await Work.find({ driverEmail: email }).populate('binId');
    }
    
  },
  Mutation: {
    createWork: async (_, { input }) => {
      const newWork = new Work(input);
      return await newWork.save();
    },
    updateWork: async (_, { id, input }) => {
      const updatedWork = await Work.findByIdAndUpdate(id, input, { new: true });
      if (!updatedWork) throw new Error('Work not found');
      return updatedWork;
    },
    deleteWork: async (_, { id }) => {
      const deletedWork = await Work.findByIdAndDelete(id);
      if (!deletedWork) throw new Error('Work not found');
      return 'Work deleted successfully';
    },

  },
};
