const ComplaintUseCase = require('../../usecase/complaint.usecase');

// Create complaint
exports.createComplaint = async (req, res) => {
  try {
    const newComplaint = await ComplaintUseCase.createComplaint(req.body);
    res.status(201).json(newComplaint);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create complaint', error: error.message });
  }
};

// Get all complaints
exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await ComplaintUseCase.getAllComplaints();
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch complaints', error: error.message });
  }
};

// Get complaint by ID
exports.getComplaintById = async (req, res) => {
  try {
    const complaint = await ComplaintUseCase.getComplaintById(req.params.id);
    if (!complaint) return res.status(404).json({ message: 'Complaint not found' });
    res.status(200).json(complaint);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch complaint', error: error.message });
  }
};

// Update complaint by ID
exports.updateComplaint = async (req, res) => {
  try {
    const updatedComplaint = await ComplaintUseCase.updateComplaint(req.params.id, req.body);
    if (!updatedComplaint) return res.status(404).json({ message: 'Complaint not found' });
    res.status(200).json(updatedComplaint);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update complaint', error: error.message });
  }
};

// Delete complaint by ID
exports.deleteComplaint = async (req, res) => {
  try {
    const deleted = await ComplaintUseCase.deleteComplaint(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Complaint not found' });
    res.status(200).json({ message: 'Complaint deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete complaint', error: error.message });
  }
};
