const express = require('express');
const router = express.Router();
const favoritesController = require('../lib/instances/favoritesController');

router.post('/users/:user_id(\\d+)/favorites', favoritesController.postByUsersId);
router.get('./users/:user_id(\\d+)/favorites', favoritesController.getByUsersId)
router.all('/users/:user_id(\\d+)/favorites', (req, res, next) => {
  res.status(405).send('Method Not Allowed');
});
router.get('/favorites/:id(\\d+)', favoritesController.getById);
router.patch('/favorites/:id(\\d+)', favoritesController.update);
router.delete('/favorites/:id(\\d+)', favoritesController.delete);
router.all('/favorites/:id(\\d+)', (req, res, next) => {
  res.status(405).send('Method Not Allowed');
});

module.exports = router;
