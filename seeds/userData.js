const { User } = require('../models');

const userdata =
[
  {
    username: "Sal",
    password: "pass123"
  },
  {
    username: "Lernantino",
    password: "pass123"
  },
  {
    username: "Amiko",
    password: "pass123"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,  
});

module.exports = seedUser;