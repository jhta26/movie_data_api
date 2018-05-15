const ReviewsValidator = require('./reviewsValidator');
const ReviewsService = require('../services/ReviewsService');
const UsersRepository = require('./usersRepository');
const ReviewsRepository = require('./reviewsRepository');

module.exports = new ReviewsService({
    reviewsValidator: ReviewsValidator,
    usersRepository: UsersRepository,
    reviewsRepository: ReviewsRepository
});