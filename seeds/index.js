const seedUser = require('./userData');
const seedPost = require('./postData');
const seedComment = require('./commentData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- User SEEDED -----\n');

  await seedPost();
  console.log('\n----- Post SEEDED -----\n');

  await seedComment();
  console.log('\n----- Comment SEEDED -----\n');

  process.exit(0);
};

seedAll();