const _ = require('lodash');
// database connection
const connection = require('../../config/db.connection');

// constructor
const Leaderboard = (application) => {
  this.active = application.active;
};

Leaderboard.getAll = (result) => {
  connection.query('SELECT id, name, score, img AS image FROM leaders WHERE flag = 1', (err, res) => {
    if (err) {
      result({
        message: err,
      }, null);
      return;
    }
    result(null, _.get(res, 'rows'));
  });
};

module.exports = Leaderboard;
