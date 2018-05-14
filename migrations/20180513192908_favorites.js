exports.up = function(knex) {
    return knex.schema.createTable('favorites', table => {
        table.increments();
        table
            .integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .index()
            .onDelete('CASCADE');
        table
            .integer('movie_id')
            .notNullable()
            .index()
        table.string('gender').notNullable().defaultTo('');
        table.string('state').notNullable().defaultTo('');
        table.string('country').notNullable().defaultTo('');
        table.integer('age').notNullable()
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('favorites');
};