const FavoritesValidator = require('./favoritesValidator');
const FavoritesService = require('../../services/FavoritesService');
const UsersRepository = require('../users/usersRepository');
const FavoritesRepository = require('./favoritesRepository');

module.exports = new FavoritesService({
    favoritesValidator: FavoritesValidator,
    usersRepository: UsersRepository,
    favoritesRepository: FavoritesRepository
});
