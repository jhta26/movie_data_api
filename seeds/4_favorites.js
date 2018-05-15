exports.seed = function(knex, Promise) {
    return knex('favorites').del().then(function() {
        // Inserts seed entries
        return knex('favorites').insert([{
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