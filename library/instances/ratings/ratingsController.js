const EntityController = require('../../controllers/EntityController');
const RatingsService = require('./ratingsService');
const UsersService = require('../users/usersService');

ratingsController = new EntityController({
    entityName: 'ratings',
    entityService: RatingsService,
    usersService: UsersService
});

module.exports = ratingsController