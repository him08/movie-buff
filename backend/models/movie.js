const mongoose = require("mongoose");
const movieSchema = mongoose.Schema({
 title: String,
 year: String,
 runtime: String,
 genres: [String],
 director: String,
actors: String,
plot: String,
posterUrl: String,
})
const Movie = mongoose.model("Movie",movieSchema,"Movies");
module.exports = Movie;