const EntityController = require('../../controllers/EntityController');
const ReviewsService = require('./reviewsService');
const UsersService = require('../users/usersService');

module.exports = new EntityController({
  reviewsService: ReviewsService,
  usersService: UsersService
});