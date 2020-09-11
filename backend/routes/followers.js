const router = require('express').Router();
let Followers = require('../models/followers.model.js');

router.route('/').get((req, res) => {
  Followers.find()
    .then(follower => res.json(follower))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newFollowers = new Followers({
    username,
    description,
    date
  });

  newFollowers.save()
    .then() => res.json('Followers added.')
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;