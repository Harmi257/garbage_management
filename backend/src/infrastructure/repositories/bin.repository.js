const Bin = require('../../domain/bin.model');

// CREATE
exports.createBin = async (data) => {
  return await Bin.create(data);
};

// READ ALL
exports.getAllBins = async () => {
  return await Bin.find();
};

// READ BY ID
exports.getBinById = async (id) => {
  return await Bin.findById(id);
};

// UPDATE
exports.updateBin = async (id, data) => {
  return await Bin.findByIdAndUpdate(id, data, { new: true });
};

// DELETE
exports.deleteBin = async (id) => {
  return await Bin.findByIdAndDelete(id);
};
