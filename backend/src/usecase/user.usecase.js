const userRepository = require('../infrastructure/repositories/user.repository');

// Create User Use Case
exports.createUser = async (data) => {
  try {
    // Validate data before creating a user (optional)
    if (!data.username || !data.userEmail || !data.mobile || !data.city) {
      throw new Error('All fields are required');
    }

    // Use the repository to save the user
    return await userRepository.createUser(data);
  } catch (error) {
    throw new Error('Error creating user: ' + error.message);
  }
};

// Get All Users Use Case
exports.getAllUsers = async () => {
  try {
    // Use the repository to fetch all users
    return await userRepository.getAllUsers();
  } catch (error) {
    throw new Error('Error fetching users: ' + error.message);
  }
};

// Get User by ID Use Case
exports.getUserById = async (id) => {
  try {
    // Validate ID format (optional)
    if (!id) {
      throw new Error('User ID is required');
    }

    // Use the repository to fetch user by ID
    const user = await userRepository.getUserById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Error fetching user by ID: ' + error.message);
  }
};

// Update User Use Case
exports.updateUser = async (id, data) => {
  try {
    // Validate data (optional)
    if (!data.username && !data.userEmail && !data.mobile && !data.city) {
      throw new Error('At least one field is required for update');
    }

    // Use the repository to update the user
    const updatedUser = await userRepository.updateUser(id, data);
    if (!updatedUser) {
      throw new Error('User not found or failed to update');
    }
    return updatedUser;
  } catch (error) {
    throw new Error('Error updating user: ' + error.message);
  }
};

// Delete User Use Case
exports.deleteUser = async (id) => {
  try {
    // Validate ID (optional)
    if (!id) {
      throw new Error('User ID is required');
    }

    // Use the repository to delete the user
    const deletedUser = await userRepository.deleteUser(id);
    if (!deletedUser) {
      throw new Error('User not found or failed to delete');
    }
    return deletedUser;
  } catch (error) {
    throw new Error('Error deleting user: ' + error.message);
  }
};
