const { User } = require("../models");

const userdata = [
  {
    username: "Sal",
    password: "pass123",
  },
  {
    username: "Lernantino",
    password: "pass1234",
  },
  {
    username: "Amiko",
    password: "pass12345",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
  });

module.exports = seedUser;
