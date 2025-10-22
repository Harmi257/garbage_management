const ComplaintRepository = require('../infrastructure/repositories/complaint.repository');

exports.createComplaint = async (data) => {
  return ComplaintRepository.createComplaint(data);
};

exports.getAllComplaints = async () => {
  return ComplaintRepository.getAllComplaints();
};

exports.getComplaintById = async (id) => {
  return ComplaintRepository.getComplaintById(id);
};

exports.updateComplaint = async (id, data) => {
  return ComplaintRepository.updateComplaint(id, data);
};

exports.deleteComplaint = async (id) => {
  return ComplaintRepository.deleteComplaint(id);
};
