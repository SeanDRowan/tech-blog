const router = require('express').Router();
const { Post,User } = require('../models');
const withAuth = require('../utils/auth');


// need to get all blogposts for dashboard
router.get('/',  async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
      } else {
  try {
    const dbPostData = await Post.findAll()
    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );

    res.render('dashboard', {posts});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }}
});

// new blogpost
router.post('/post', async (req, res) => {
  try {
    const dbPostData = await Post.create({
      post_name: req.body.post_name,
      post_content: req.body.post_content,
     post_date: new Date(),
    });

      res.status(200).json(dbPostData);
  
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// CREATE a book
router.post('/', (req, res) => {
  // Use Sequelize's `create()` method to add a row to the table
  // Similar to `INSERT INTO` in plain SQL
  Book.create({
    title: req.body.title,
    author: req.body.author,
    is_paperback: true
  })
    .then((newBook) => {
      // Send the newly created row as a JSON object
      res.json(newBook);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
