exports.seed = function(knex, Promise) {
    return knex('reviews').del().then(function() {
        // Inserts seed entries
        return knex('users').insert([{
                user_id: 1,
                movie_id: 299536,
                content:'great movie',
                gender: 'male',
                state:'CA',
                country:'USA',
                age:28,
               
                
            },
            {
                user_id: 2,
                movie_id: 299536,
                content:'it was ight',
                gender: 'female',
                state:'CA',
                country:'USA',
                age:31,
               
                
            }
            
        ]);
    });
};