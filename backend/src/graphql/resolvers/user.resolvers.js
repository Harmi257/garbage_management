const User = require('../../domain/user.model');

module.exports = {
  Query: {
    getAllUsers: async () => {
      return await User.find();
    },
    getUserById: async (_, { id }) => {
      return await User.findById(id);
    },
    getUserByEmail: async (_, { userEmail }) => {
      return await User.findOne({ userEmail });
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const existingUser = await User.findOne({ userEmail: input.userEmail });
      if (existingUser) throw new Error('Email already exists');
      const newUser = new User(input);
      return await newUser.save();
    },
    updateUser: async (_, { id, input }) => {
      const updatedUser = await User.findByIdAndUpdate(id, input, { new: true });
      if (!updatedUser) throw new Error('User not found');
      return updatedUser;
    },
    deleteUser: async (_, { id }) => {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) throw new Error('User not found');
      return 'User deleted successfully';
    },
  },
};
