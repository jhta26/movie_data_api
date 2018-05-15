const express = require('express');
const router = express.Router();
const movieAPI = require('../library/instances/ratings/ratingsController');
const movieAPIController = require('../library/controllers/MovieAPIController')

router.get('./movieapi', movieAPIController.getMovieInfoTMDB)
router.all('/users/:user_id(\\d+)/ratings', (req, res, next) => {
  res.status(405).send('Method Not Allowed');
});
router.get('/ratings/:id(\\d+)', ratingsController.getById);
router.patch('/ratings/:id(\\d+)', ratingsController.update);
router.delete('/ratings/:id(\\d+)', ratingsController.delete);
router.all('/ratings/:id(\\d+)', (req, res, next) => {
  res.status(405).send('Method Not Allowed');
});

module.exports = router;
