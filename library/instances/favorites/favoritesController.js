const EntityController = require('../../controllers/EntityController');
const FavoritesService = require('./favoritesService');
const UsersService = require('../users/usersService');

favoritesController = new EntityController({
  entityService: FavoritesService,
  usersService: UsersService
});

module.exports = favoritesController
