const router = require('express').Router();

const {
    getAllChores,
    getChoreById,
    createChore,
    updateChore,
    deleteChore
} = require('../../controllers/chore-controller');

router
    .route('/')
    .get(getAllChores)
    .post(createChore);

router
    .route('/:id')
    .get(getChoreById)
    .put(updateChore)
    .delete(deleteChore)

module.exports = router;