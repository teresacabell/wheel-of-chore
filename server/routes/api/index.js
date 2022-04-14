const router = require('express').Router();
const usersRoutes = require('./users');
const choresRoutes = require('./chores');

router.use('/users', usersRoutes);
router.use('/chores', choresRoutes);

module.exports = router;