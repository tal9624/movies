// models/movie.js
const movies = [
    { title: 'Inception', year: 2010, director: 'Christopher Nolan' },
    { title: 'The Matrix', year: 1999, director: 'The Wachowskis' },
    { title: 'Interstellar', year: 2014, director: 'Christopher Nolan' }
];

exports.getAllMovies = () => {
    return movies;
};
