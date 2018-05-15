const RatingsValidator = require('./ratingsValidator');
const RatingsService = require('../services/RatingsService');
const UsersRepository = require('./usersRepository');
const RatingsRepository = require('./ratingsRepository');

module.exports = new RatingsService({
    ratingsValidator: RatingsValidator,
    usersRepository: UsersRepository,
    ratingsRepository: RatingsRepository
});