const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: String,
  genre: String,
  image: String,
  category: String,
  year: String,
}, { collection: 'movies' })

const Movies = mongoose.model('movies', moviesSchema);
module.exports = Movies;