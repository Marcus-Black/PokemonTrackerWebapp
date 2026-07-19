const express = require('express');
const userRoutes = require('./users');
const collectionRoutes = require('./collection');
// const searchRoutes = require('./search');
const router = express.Router();


router.use('/users', userRoutes);


router.use('/collection', collectionRoutes);

//
// router.use('/search', searchRoutes);

module.exports = router;
