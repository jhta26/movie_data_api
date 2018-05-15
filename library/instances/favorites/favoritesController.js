const EntityController = require('../controllers/EntityController');
const FavoritesService = require('./favoritesService');
const UsersService = require('./usersService');

module.exports = new FavoritesController({
  favoritesService: FavoritesService,
  usersService: UsersService
});
