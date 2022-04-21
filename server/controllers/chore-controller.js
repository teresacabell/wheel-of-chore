// const { Chore, User } = require('../models');

// const choreController = {
//     getAllChores(req, res) {
//         Chore.find({})
//         .populate({
//             path: 'user',
//             select: '-__v'
//         })
//         .select('-__v')
//         .sort({ _id: -1 })
//         .then(dbChoreData => res.json(dbChoreData))
//         .catch(err => {
//             console.log(err);
//             res.status(400).json(err)
//         });
//     },

//     getChoreById({ params }, res) {
//         Chore.findOne({ _id: params.id })
//         .populate({ 
//             path: 'user',
//             select: '-__v'
//         })
//         .select('-__v')
//         .sort({ _id: -1 })
//         .then(dbChoreData => res.json(dbChoreData))
//         .catch(err => {
//             console.log(err);
//             res.status(400).json(err)
//         })
//     },

//     createChore({ params, body }, res) {
//         Chore.create(body)
//             .then(({ _id}) => {
//                 return User.findOneAndUpdate(
//                     { username: body.username },
//                     { $push: { thoughts: _id } },
//                     { new: true }
//                 );
//             })
//             .then(dbUserData => {
//                 if (!dbUserData) {
//                     res.status(404).json({ message: 'No user found with this username!'});
//                     return;
//                 }
//                 res.json(dbUserData); 
//             })
//             .catch(err => res.json(err));
//     },

//     updateChore({ params, body }, res) {
//         Chore.findOneAndUpdate(
//             { _id: params.id },
//             body, 
//             { new: true, runValidators: true }
//         )
//         .then(updatedChore => {
//             if (!updatedChore) {
//                 return res.status(404).json({ message: 'No chore with this ID!' });
//             }
//         res.json(updatedThought);
//         })
//         .catch(err => res.json(err));
//     },

//     deleteChore({ params, body}, res) {
//         Chore.findOneAndDelete({ _id: params.id })
//         .then(deletedChore => {
//             if (!deletedChore) {
//                 return res.status(404).json({ message: 'No chore with this ID!' });
//             }
//             res.json(deletedChore);
//         })
//         .catch(err => res.json(err));
//     }
// };

// module.exports = choreController;