const { Post } = require('../models');

const postdata =
[
  {
    title: "USB drive",
    content: "Plugging in a USB cable the right way feels like a no-brainer. Then why do we get it wrong on the first try so often? Here's the secret: Grab any USB cable sitting around your house. See that symbol on one side? It's not just branding or decoration. That symbol will point up if you're plugging in horizontally and if you're plugging a cable vertically, the USB symbol will face you. Now you know.",
    user_id: 1
  },
  {
    title: "Reopen browser tab",
    content: "Hit Ctrl+Shift+T on your PC or Command+Shift+T on your Mac to automatically reopen the tab you just closed.",
    user_id: 2
  },
  {
    title: "Crop a screenshot",
    content: "On a Mac, press Command + Shift + 5, and a rectangle will emerge, which you can manipulate as much as you want. On Windows 10, go to Start, enter the Search Bar, and type Snipping Tool. This will give you a similar box that you can drag to any shape over your screen.",
    user_id: 3
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;