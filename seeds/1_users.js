exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries



        //     table.increments();
        // table.string('name').notNullable().unique().defaultTo('');
        // table.string('username').notNullable().unique();
        // table.string('birthday').notNullable().defaultTo('');
        // table.string('gender').notNullable().defaultTo('');
        // table.string('state').notNullable().defaultTo('');
        // table.string('country').notNullable().defaultTo('');
        // table.jsonb('reviews').nullable();
        // table.jsonb('ratings').nullable();
        // table.jsonb('favorites').notNullable();
        // table.specificType('hashed_password', 'char(60)').notNullable();
        // table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        // table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    return knex('users').del().then(function() {
        // Inserts seed entries
        return knex('users').insert([{
                name: 'Jason Hsu',
                username: 'Jason',
                birthday: '05/08/1990'
                gender: 'male',
                state:'CA',
                country:'USA',
                reviews:{},
                ratings:{},
                favorites:{},
                hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
                
            },
            {
                name: 'Megan Hsu',
                username: 'Megan',
                birthday: '10/31/1986'
                gender: 'female',
                state:'CA',
                country:'USA',
                reviews:{},
                ratings:{},
                favorites:{},
                hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
                
            }
            
        ]);
    });
};