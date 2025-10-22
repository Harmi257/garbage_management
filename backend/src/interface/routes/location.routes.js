const express = require('express');
const router = express.Router();
const locationController = require('../controllers/location.controller');

router.post('/locations', locationController.createLocation);
router.get('/locations', locationController.getAllLocations);
router.get('/locations/:id', locationController.getLocationById);
router.put('/locations/:id', locationController.updateLocation);
router.delete('/locations/:id', locationController.deleteLocation);

module.exports = router;
