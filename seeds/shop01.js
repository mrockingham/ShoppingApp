
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, name: 'Michael Rockingahm', email: 'admin@email.com', password:'xxxxxx', isAdmin: false, created_at: ''},
        {id: 2, name: 'Candida Rockingahm', email: 'candida@email.com', password:'xxxxxx', isAdmin: false, created_at: ''},
        {id: 3, name: 'Baby Michael Rockingham', email: 'baby@email.com', password:'xxxxxx', isAdmin: false, created_at: ''},
        
      ]);
    });
};
