const Complaint = require('../../domain/complaint.model');

exports.createComplaint = async (data) => {
  const complaint = new Complaint(data);
  return complaint.save();
};

exports.getAllComplaints = async () => {
  return Complaint.find();
};

exports.getComplaintById = async (id) => {
  return Complaint.findById(id);
};

exports.updateComplaint = async (id, data) => {
  return Complaint.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteComplaint = async (id) => {
  return Complaint.findByIdAndDelete(id);
};
