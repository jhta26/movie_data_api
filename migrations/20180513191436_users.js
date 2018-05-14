exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.string('name').notNullable().unique().defaultTo('');
        table.string('username').notNullable().unique();
        table.string('birthday').notNullable().defaultTo('');
        table.string('gender').notNullable().defaultTo('');
        table.string('state').notNullable().defaultTo('');
        table.string('country').notNullable().defaultTo('');
        table.jsonb('reviews').nullable();
        table.jsonb('ratings').nullable();
        table.jsonb('favorites').notNullable();
        table.specificType('hashed_password', 'char(60)').notNullable();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};