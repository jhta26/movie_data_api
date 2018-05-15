const EntityController = require('../../controllers/EntityController');
const FavoritesService = require('./favoritesService');
const UsersService = require('../users/usersService');

module.exports = new EntityController({
  favoritesService: FavoritesService,
  usersService: UsersService
});
