exports.seed = function(knex, Promise) {
    return knex('reviews').del().then(function() {
        // Inserts seed entries
        return knex('users').insert([{
                user_id: 1,
                movie_id: 299536,
                gender: 'male',
                state:'CA',
                country:'USA',
                age:28,
               
                
            },
            {
                user_id: 2,
                movie_id: 299536,
                gender: 'female',
                state:'CA',
                country:'USA',
                age:31,
               
                
            }
            
        ]);
    });
};