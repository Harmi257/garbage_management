const WorkUseCase = require('../../usecase/work.usecase');

// Create new work
exports.createWork = async (req, res) => {
  try {
    const newWork = await WorkUseCase.createWork(req.body);
    res.status(201).json(newWork);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create work', error: error.message });
  }
};

// Get all work entries
exports.getAllWorks = async (req, res) => {
  try {
    const works = await WorkUseCase.getAllWorks();
    res.status(200).json(works);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch work entries', error: error.message });
  }
};

// Get work by ID
exports.getWorkById = async (req, res) => {
  try {
    const work = await WorkUseCase.getWorkById(req.params.id);
    if (!work) {
      return res.status(404).json({ message: 'Work not found' });
    }
    res.status(200).json(work);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch work', error: error.message });
  }
};

// Update work by ID
exports.updateWork = async (req, res) => {
  try {
    const updatedWork = await WorkUseCase.updateWork(req.params.id, req.body);
    if (!updatedWork) {
      return res.status(404).json({ message: 'Work not found' });
    }
    res.status(200).json(updatedWork);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update work', error: error.message });
  }
};

// Delete work by ID
exports.deleteWork = async (req, res) => {
  try {
    const result = await WorkUseCase.deleteWork(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Work not found' });
    }
    res.status(200).json({ message: 'Work deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete work', error: error.message });
  }
};
