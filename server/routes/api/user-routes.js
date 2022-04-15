const router = require("express").Router();

const {
  getUsers,
  addUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addMember,
  deleteMember,
} = require("../../controllers/user-controller");

router.route("/").get(getUsers).post(addUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:memberId").post(addMember).delete(deleteMember);

module.exports = router;
