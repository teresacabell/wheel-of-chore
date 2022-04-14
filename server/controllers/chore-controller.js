const { Chore, User } = require('../models');

const choreController = {
    getAllChores(req, res) {
        Chore.find({})
        .populate({
            path: 'user',
            select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbChoreData => res.json(dbChoreData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        });
    },

    getChoreById({ params }, res) {
        
    },

    createChore({ params, body }, res) {

    },

    updateChore({ params, body }, res) {

    },

    deleteChore({ params, body}, res) {

    }
};

module.exports = choreController;