const EntityRepository = require('../../repositories/EntityRepository');
const db = require('../../../knex');

module.exports = new EntityRepository({
  entityName: 'reviews',
  database: db
});
