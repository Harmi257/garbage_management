const WorkRepo = require('../infrastructure/repositories/work.repository');

const createWork = async (data) => await WorkRepo.create(data);
const getAllWorks = async () => await WorkRepo.findAll();
const getWorkById = async (id) => await WorkRepo.findById(id);
const updateWork = async (id, data) => await WorkRepo.update(id, data);
const deleteWork = async (id) => await WorkRepo.remove(id);

module.exports = { createWork, getAllWorks, getWorkById, updateWork, deleteWork };
