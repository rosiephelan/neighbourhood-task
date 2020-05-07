var knex = require('./knex.js');

function Houses() {
  return knex('houses');
}

// *** queries *** //

function getAll() {
  return Houses().select();
}

function getSingle(houseID) {
  return Houses().where('id', parseInt(houseID)).first();
}

function add(house) {
  return Houses().insert(house, 'id');
}

function update(houseID, updates) {
  return Houses().where('id', parseInt(houseID)).update(updates);
}
knex 
function deleteItem(houseID) {
  return Houses().where('id', parseInt(houseID)).del();
}

function Neighbours() {
  return knex('neighbours');
}

// *** queries *** //

function getAllNeighbours() {
  return Neighbours().select();
}

// function getSingle(houseID) {
//   return Houses().where('id', parseInt(houseID)).first();
// }

// function add(house) {
//   return Houses().insert(house, 'id');
// }

// function update(houseID, updates) {
//   return Houses().where('id', parseInt(houseID)).update(updates);
// }
// knex 
// function deleteItem(houseID) {
//   return Houses().where('id', parseInt(houseID)).del();
// }


module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteItem: deleteItem,
  getAllNeighbours: getAllNeighbours
};