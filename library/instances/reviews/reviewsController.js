const EntityController = require('../controllers/EntityController');
const ReviewsService = require('./reviewsService');
const UsersService = require('./usersService');

module.exports = new ReviewsController({
  reviewsService: ReviewsService,
  usersService: UsersService
});