const FavoritesValidator = require('./favoritesValidator');
const FavoritesService = require('../services/FavoritesService');
const UsersRepository = require('./usersRepository');
const FavoritesRepository = require('./favoritesRepository');

module.exports = new FavoritesService({
    favoritesValidator: FavoritesValidator,
    usersRepository: UsersRepository,
    favoritesRepository: FavoritesRepository
});
