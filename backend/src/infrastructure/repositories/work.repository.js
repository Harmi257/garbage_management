const Work = require('../../domain/work.model');

const create = async (data) => await Work.create(data);
const findAll = async () => await Work.find().populate('binId');
const findById = async (id) => await Work.findById(id).populate('binId');
const update = async (id, data) => await Work.findByIdAndUpdate(id, data, { new: true });
const remove = async (id) => await Work.findByIdAndDelete(id);

module.exports = { create, findAll, findById, update, remove };
