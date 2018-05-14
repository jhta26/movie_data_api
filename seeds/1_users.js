exports.seed = function(knex, Promise) {
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