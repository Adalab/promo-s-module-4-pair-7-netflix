const mongoose = require('mongoose');
const Schema = mongoose.Squema;

const usersSchema = new Schema({
  user: String,
  password: String,
  name: String,
  email: String,
  plan_details: String,
  // user: { Squema.Types.ObjectId, ref: 'movies' }
}, { collection: 'users' })

const Users = mongoose.model('users', usersSchema);
module.exports = Users;