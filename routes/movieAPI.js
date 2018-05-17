const express = require('express');
const router = express.Router();
const movieAPIController = require('../library/instances/movieAPI/movieAPIController')

router.get('/movieapi/:search', movieAPIController.getMovieInfoTMDB)
router.get('/movieapi/popular',movieAPIController.getPopularMovies)
router.get('/movieapi/upcoming',movieAPIController.getUpcomingMovies)
router.all('/users/:user_id(\\d+)/ratings', (req, res, next) => {
  res.status(405).send('Method Not Allowed');
});


module.exports = router;
