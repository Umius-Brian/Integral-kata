const router = require('express').Router();
let Post = require('../models/post.model.js');

router.route('/').get((req, res) => {
  Post.find()
    .then(post => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newPost = new Post({
    username,
    description,
    date
  });

  newPost.save()
    .then(() => res.json('Post added'))
    .catch(err => res.status(400).json('Error: ') + err);
})

module.exports = router;