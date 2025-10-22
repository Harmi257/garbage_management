const BinRepository = require('../infrastructure/repositories/bin.repository');

exports.createBin = async (data) => {
  return BinRepository.createBin(data);
};

exports.getAllBins = async () => {
  return BinRepository.getAllBins();
};

exports.getBinById = async (id) => {
  return BinRepository.getBinById(id);
};

exports.updateBin = async (id, data) => {
  return BinRepository.updateBin(id, data);
};

exports.deleteBin = async (id) => {
  return BinRepository.deleteBin(id);
};
