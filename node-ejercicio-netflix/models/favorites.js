const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
  users: { type: Schema.Types.ObjectId, ref: 'users' },
  movies: { type: Schema.Types.ObjectId, ref: 'movies' },
  score: Number,
}, { collection: 'favorites' })

const Favorites = mongoose.model('favorites', favoritesSchema);
module.exports = Favorites;