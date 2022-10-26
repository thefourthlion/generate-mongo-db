const express = require("express");
const router = express.Router();

const {
  createPost,
  readPost,
  readPostFromID,
  updatePost,
  deletePost,
} = require("../controllers/Post");

router.route("/create").post(createPost);
router.route("/read").get(readPost);
router.route("/read/:id").get(readPostFromID);
router.route("/update/:id").get(updatePost);
router.route("/delete/:id").delete(deletePost);

module.exports = router;
