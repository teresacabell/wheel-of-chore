const router = require('express').Router();

const {
    getAllChores,
    getChoreById,
    createChore,
    updateChore,
    deleteChore
} = require('../../controllers/chore-controller');
const { update } = require('../../models/Chore');

router.route('/').get(getAllChores).post(createChore);

router.route('/:choreId').get(getChoreById).put(updateChore).delete(deleteChore);

module.exports = router;