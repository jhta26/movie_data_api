const EntityController = require('../../controllers/EntityController');
const RatingsService = require('./ratingsService');
const UsersService = require('../users/usersService');

module.exports = new EntityController({
  ratingsService: RatingsService,
  usersService: UsersService
});