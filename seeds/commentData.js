const { Comment } = require("../models");

const commentData = [
  {
    comment_content: "Great to know!",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_content: "Good idea!",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_content: "Hope this helps!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_content: "Good job!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_content: "Can't wait to try this!",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_content: "This will save time.",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_content: "Good stuff you know!",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_content: "Thanks for the tip!.",
    user_id: 1,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
