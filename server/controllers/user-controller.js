const User = require("../models/User");

const userController = {
    getUsers(req, res) {
        User.find()
        .then((dbData) => res.json(dbData))
        .catch((err) => res.json(err));
    },
    addUser(req, res) {
        User.create(req.body)
        .then((dbData) => res.json(dbData))
        .catch((err) => res.json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .then((dbData) => res.json(dbData))
        .catch((err) => res.json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true}
        )
        .then((dbData) => res.json(dbData))
        .catch((err) => res.json(err));
    },
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((dbData) => res.json(dbData))
        .catch((err) => res.json(err));
    },
};

module.exports = userController;