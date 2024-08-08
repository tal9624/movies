// routes/movieRoutes.js
const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', movieController.getHomePage);
router.get('/movies', movieController.getMoviesPage);

module.exports = router;
