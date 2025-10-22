const express = require('express');
const router = express.Router();
const workController = require('../controllers/work.controller');

// CREATE a new work entry
router.post('/works/', workController.createWork);

// GET all work entries
router.get('/works/', workController.getAllWorks);

// GET a single work by ID
router.get('/works/:id', workController.getWorkById);

// UPDATE a work entry by ID
router.put('/works/:id', workController.updateWork);

// DELETE a work entry by ID
router.delete('/works/:id', workController.deleteWork);

module.exports = router;
