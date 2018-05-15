const express = require('express');
const router = express.Router();
const ratingsController = require('../library/instances/ratings/ratingsController');

router.post('/users/:user_id(\\d+)/ratings', ratingsController.postByUsersId);
router.get('./users/:user_id(\\d+)/ratings', ratingsController.getByUsersId)
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
