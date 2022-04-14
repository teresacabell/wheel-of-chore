const router = require('express').Router();
const usersRoutes = require('./user-routes');
const choresRoutes = require('./chores-routes');

router.use('/users', usersRoutes);
router.use('/chores', choresRoutes);

module.exports = router;