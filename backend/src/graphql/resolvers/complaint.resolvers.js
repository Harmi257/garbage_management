const Complaint = require('../../domain/complaint.model');

module.exports = {
  Query: {
    getAllComplaints: async () => await Complaint.find(),
    getComplaintById: async (_, { id }) => await Complaint.findById(id),
    getComplaintsByEmail: async (_, { email }) => {
      return await Complaint.find({ userEmail: email });
    },
  },
  Mutation: {
    createComplaint: async (_, { input }) => {
      const newComplaint = new Complaint(input);
      return await newComplaint.save();
    },
    updateComplaint: async (_, { id, input }) => {
      return await Complaint.findByIdAndUpdate(id, input, { new: true });
    },
    deleteComplaint: async (_, { id }) => {
      const deleted = await Complaint.findByIdAndDelete(id);
      if (!deleted) throw new Error('Complaint not found');
      return 'Complaint deleted successfully';
    }
  }
};
