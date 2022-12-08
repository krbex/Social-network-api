const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/users/:userId
router.route("/:userId").get(getSingleThought).delete(deleteThought);

// /api/users/:userId/reactions
router.route("/:userId/reactions").post(addReaction);

// /api/users/:userId/reactions/:reactionId
router.route("/:userId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
