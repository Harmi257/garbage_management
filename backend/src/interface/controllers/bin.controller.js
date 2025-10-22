const BinUseCase = require('../../usecase/bin.usecase');

// Create bin
exports.createBin = async (req, res) => {
  try {
    const newBin = await BinUseCase.createBin(req.body);
    res.status(201).json(newBin);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create bin', error: error.message });
  }
};

// Get all bins
exports.getAllBins = async (req, res) => {
  try {
    const bins = await BinUseCase.getAllBins();
    res.status(200).json(bins);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bins', error: error.message });
  }
};

// Get bin by ID
exports.getBinById = async (req, res) => {
  try {
    const bin = await BinUseCase.getBinById(req.params.id);
    if (!bin) return res.status(404).json({ message: 'Bin not found' });
    res.status(200).json(bin);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bin', error: error.message });
  }
};

// Update bin
exports.updateBin = async (req, res) => {
  try {
    const updated = await BinUseCase.updateBin(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Bin not found' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update bin', error: error.message });
  }
};

// Delete bin
exports.deleteBin = async (req, res) => {
  try {
    const deleted = await BinUseCase.deleteBin(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Bin not found' });
    res.status(200).json({ message: 'Bin deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete bin', error: error.message });
  }
};
