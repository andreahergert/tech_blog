const router = require("express").Router();
const { User, Post, Comment } = require("../models/");
const withAuth = require("../utils/auth");

// get all posts for homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
        // this may need changed?
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id,
      },

      include: [
        {
          model: Comment,
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });
      console.log(post);
      res.render("post-by-id", { post, loggedIn: req.session.loggedIn });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Route to login or signup page
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
