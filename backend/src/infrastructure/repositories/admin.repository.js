const Admin = require('../../domain/admin.model');

// Create a new admin
exports.createAdmin = async (data) => {
  try {
    const admin = new Admin(data);
    return await admin.save();
  } catch (error) {
    throw new Error('Error creating admin: ' + error.message);
  }
};

// Get all admins
exports.getAllAdmins = async () => {
  try {
    return await Admin.find();
  } catch (error) {
    throw new Error('Error fetching admins: ' + error.message);
  }
};

// Get an admin by ID
exports.getAdminById = async (id) => {
  try {
    return await Admin.findById(id);
  } catch (error) {
    throw new Error('Error fetching admin by ID: ' + error.message);
  }
};

// Update an admin
exports.updateAdmin = async (id, data) => {
  try {
    return await Admin.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error('Error updating admin: ' + error.message);
  }
};

// Delete an admin by ID
exports.deleteAdmin = async (id) => {
  try {
    return await Admin.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error deleting admin: ' + error.message);
  }
};
