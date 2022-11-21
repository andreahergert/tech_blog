

const seedUser = require("./userData");
const seedPost = require("./postData");
const seedComments = require("./commentData");

const { Post, User, Comment } = require('../models');

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- Database Synced -----\n");

  const users = await User.bulkCreate(seedUser, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- User Seeded -----\n');

  const posts = await Post.bulkCreate(seedPost);
  console.log('\n----- Post Seeded -----\n');

  const comments = await Comment.bulkCreate(seedComments);
  console.log('\n----- Comment Seeded -----\n');
  
  process.exit(0);
};

seedAll();


// await seedUser();
// console.log("\n----- User Seeded -----\n");

// await seedPost();
// console.log("\n----- Post Seeded -----\n");

// await seedComments();
// console.log("\n----- Comment Seeded -----\n");