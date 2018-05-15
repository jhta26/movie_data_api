const express = require('express');
const router = express.Router();
const reviewsController = require('../library/instances/reviews/reviewsController');

router.post('/users/:user_id(\\d+)/reviews', reviewsController.postByUsersId);
router.get('./users/:user_id(\\d+)/reviews', reviewsController.getByUsersId)
router.all('/users/:user_id(\\d+)/reviews', (req, res, next) => {
  res.status(405).send('Method Not Allowed');
});
router.get('/reviews/:id(\\d+)', reviewsController.getById);
router.patch('/reviews/:id(\\d+)', reviewsController.update);
router.delete('/reviews/:id(\\d+)', reviewsController.delete);
router.all('/reviews/:id(\\d+)', (req, res, next) => {
  res.status(405).send('Method Not Allowed');
});

module.exports = router;