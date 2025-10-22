const Admin = require('../../domain/admin.model');

module.exports = {
  Query: {
    getAllAdmins: async () => await Admin.find(),
    getAdminById: async (_, { id }) => await Admin.findById(id),
  },
  Mutation: {
    createAdmin: async (_, { input }) => {
      const newAdmin = new Admin(input);
      return await newAdmin.save();
    },
    updateAdmin: async (_, { id, input }) => {
      return await Admin.findByIdAndUpdate(id, input, { new: true });
    },
    deleteAdmin: async (_, { id }) => {
      const deleted = await Admin.findByIdAndDelete(id);
      if (!deleted) throw new Error('Admin not found');
      return 'Admin deleted successfully';
    }
  }
};
