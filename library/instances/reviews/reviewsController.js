const EntityController = require('../../controllers/EntityController');
const ReviewsService = require('./reviewsService');
const UsersService = require('../users/usersService');

reviewsController = new EntityController({
    entityName: 'reviews',
    entityService: ReviewsService,
    usersService: UsersService
});

module.exports = reviewsController