const sequelize = require("../config/connection");

const seedUser = require("./userData");
const seedPost = require("./postData");
const seedComments = require("./commentData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- Database Synced -----\n");

  await seedUser();
  console.log("\n----- User Seeded -----\n");

  await seedPost();
  console.log("\n----- Post Seeded -----\n");

  await seedComments();
  console.log("\n----- Comment Seeded -----\n");

  process.exit(0);
};

seedAll();
