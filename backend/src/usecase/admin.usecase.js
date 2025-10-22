const AdminRepository = require('../infrastructure/repositories/admin.repository');

exports.createAdmin = async (data) => {
  return AdminRepository.createAdmin(data);
};

exports.getAllAdmins = async () => {
  return AdminRepository.getAllAdmins();
};

exports.getAdminById = async (id) => {
  return AdminRepository.getAdminById(id);
};

exports.updateAdmin = async (id, data) => {
  return AdminRepository.updateAdmin(id, data);
};

exports.deleteAdmin = async (id) => {
  return AdminRepository.deleteAdmin(id);
};
