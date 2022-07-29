const router = require('express').Router();
const locationRoutes = require('./locationsRoute');
const travelersRoutes = require('./travelersRoute');
const tripsRoutes = require('./tripsRoute');

router.use('/locations', locationRoutes);
router.use('/travelers', travelersRoutes);
router.use('/trips', tripsRoutes);

module.exports = router;
