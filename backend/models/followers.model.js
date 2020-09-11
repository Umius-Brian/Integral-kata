const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const followersSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
})

const Followers = mongoose.model('Followers', followersSchema);

module.exports = Followers;