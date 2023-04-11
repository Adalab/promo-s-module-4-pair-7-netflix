const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
  idUser: { type: Schema.Types.ObjectId, ref: 'users' },
  idMovie: { type: Schema.Types.ObjectId, ref: 'movies' },
  score: Number,
}, { collection: 'favorites' })

const Favorites = mongoose.model('favorites', favoritesSchema);
module.exports = Favorites;