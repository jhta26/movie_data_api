const EntityController = require('../controllers/EntityController');
const RatingsService = require('./ratingsService');
const UsersService = require('./usersService');

module.exports = new RatingsController({
  ratingsService: RatingsService,
  usersService: UsersService
});