const { Post } = require("../models");

const postdata = [
  {
    title: "USB drive",
    content:
      "The symbol on one side will point up if you're plugging in horizontally and if you're plugging a cable vertically, the USB symbol will face you.",
    user_id: 1,
  },
  {
    title: "Reopen browser tab",
    content:
      "Hit Ctrl+Shift+T on your PC or Command+Shift+T on your Mac to automatically reopen the tab you just closed.",
    user_id: 2,
  },
  {
    title: "Crop a screenshot",
    content:
      "On a Mac, press Command + Shift + 5, and a rectangle will emerge, which you can manipulate as much as you want. On Windows 10, go to Start, enter the Search Bar, and type Snipping Tool.",
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
