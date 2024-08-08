// controllers/movieController.js
const movies = require('../models/movie');

exports.getHomePage = (req, res) => {
    res.render('index');
};

exports.getMoviesPage = (req, res) => {
    res.render('movies', { movies: movies.getAllMovies() });
};
