exports.seed = function(knex, Promise) {
    return knex('ratings').del().then(function() {
        // Inserts seed entries
        return knex('ratings').insert([{
                user_id: 1,
                movie_id: 299536,
                rating:2,
                gender: 'male',
                state:'CA',
                country:'USA',
                age:28,
               
                
            },
            {
                user_id: 2,
                movie_id: 299536,
                rating:1,
                gender: 'female',
                state:'CA',
                country:'USA',
                age:31,
               
                
            }
            
        ]);
    });
};
