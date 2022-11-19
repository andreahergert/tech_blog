const router = require("express").Router();

const userRoutes = require("./userRoutes.js");
const postRoutes = require("./postRoutes.js");
const commentRoutes = require("./commentRoutes.js");

router.use("/comments", commentRoutes);
router.use("/posts", postRoutes);
router.use("/users", userRoutes);

module.exports = router;
