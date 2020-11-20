const _ = require('lodash');
// database connection
const connection = require('../../config/db.connection');

// constructor
const Player = (application) => {
  this.active = application.active;
};

Player.create = (data, result) => {
  console.log('query data', data);
  result(null, data);
};

module.exports = Player;
