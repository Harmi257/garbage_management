const AdminUseCase = require('../../usecase/admin.usecase');

// Create admin
exports.createAdmin = async (req, res) => {
  try {
    const newAdmin = await AdminUseCase.createAdmin(req.body);
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create admin', error: error.message });
  }
};

// Get all admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await AdminUseCase.getAllAdmins();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch admins', error: error.message });
  }
};

// Get admin by ID
exports.getAdminById = async (req, res) => {
  try {
    const admin = await AdminUseCase.getAdminById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch admin', error: error.message });
  }
};

// Update admin
exports.updateAdmin = async (req, res) => {
  try {
    const updatedAdmin = await AdminUseCase.updateAdmin(req.params.id, req.body);
    if (!updatedAdmin) return res.status(404).json({ message: 'Admin not found' });
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update admin', error: error.message });
  }
};

// Delete admin
exports.deleteAdmin = async (req, res) => {
  try {
    const deleted = await AdminUseCase.deleteAdmin(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Admin not found' });
    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete admin', error: error.message });
  }
};
