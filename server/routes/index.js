<<<<<<< HEAD
=======
const path = require('path');
>>>>>>> main
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

<<<<<<< HEAD
router.use((req, res) => {
    res.status(404).send('<h1>:stuck_out_tongue_closed_eyes: 404 ERROR! </h1>');
=======
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, ''));
>>>>>>> main
});

module.exports = router;