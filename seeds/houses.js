
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('houses').del()
    .then(function () {
      // Inserts seed entries
      return knex('houses').insert([
        {
          id: 1,
          street_address: '123 Main St',
          postcode: 'GU27',
          owner_id: 1234
        },
        {
          id: 2, 
          street_address: '33 High St',
          postcode: 'GU27',
          owner_id: 5678
        },
        {
          id: 3, 
          street_address: 'My escape',
          postcode: 'ST13',
          owner_id: 1234
        }
      ]);
    });
};
