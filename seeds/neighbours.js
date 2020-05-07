
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('neighbours').del()
    .then(function () {
      // Inserts seed entries
      return knex('neighbours').insert([
        {
          id: 1, 
          street_address: '123 igor street',
          postcode: 'GU123'
        },
        {
          id: 2, 
          street_address: '123 rosie street',
          postcode: 'GU123'
        },
        {
          id: 3, 
          street_address: '123 igor street',
          postcode: 'GU123'
        },
      ]);
    });
};
