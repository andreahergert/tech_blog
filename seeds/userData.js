const { User } = require("../models");

const userdata = [
  {
    username: "Sal",
    password: "password123",
  },
  {
    username: "Lernantino",
    password: "password1234",
  },
  {
    username: "Amiko",
    password: "password12345",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
  });

module.exports = seedUser;
